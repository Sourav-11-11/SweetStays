const express = require("express");
const router = express.Router();
const WrapAsync = require("../utils/WrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");


const validateListing = (req, res, next) => {
    if (!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listing");
    } 
    const { error } = listingSchema.validate(req.body);
    if (error) {
      let errorMessage = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, errorMessage);
    } else {
        next();
    } 
  };

//index route
router.get("/", WrapAsync(async (req, res) => {
  const allListings = await Listing.find({}).select("title description price image _id").lean();
  res.render("listings/index", {allListings});
}));

//new route
router.get("/new", (req, res) => {
  res.render("listings/new");
});

//Show Route
router.get("/:id", WrapAsync(async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  if (!listing) {
    return next(new ExpressError("Listing not found", 404));
  }
  res.render("listings/show", { listing });
}));


//Create Route
router.post(
    "/",
    validateListing,
    WrapAsync(async (req, res, next) => {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    })
);


//Edit Route
router.get(
    "/:id/edit",
    WrapAsync(async (req, res) => {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        res.render("listings/edit", { listing });
    })
);

//Update Route
router.put("/:id", 
  validateListing,
  WrapAsync(async (req, res, next) => {
    let { id } = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));


//delete route
router.delete("/:id", WrapAsync(async (req, res, next) => {
  let { id } = req.params;
  const deletedListing = await Listing.findByIdAndDelete(id);
  if (!deletedListing) {
    return next(new ExpressError("Listing not found", 404));
  }
  console.log("Deleted listing:", deletedListing._id);
  res.redirect("/listings");
}));

module.exports = router;