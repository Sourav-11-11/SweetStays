const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({}).select("title description price image _id").lean();
  res.render("listings/index", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new");
};

module.exports.show = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author"
      }
    })
    .populate("owner").lean();
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  res.render("listings/show", { listing });
};

module.exports.create = async (req, res, next) => {
  const newListing = new Listing(req.body.listing);
  console.log("New listing data:", newListing);
  newListing.owner = req.user._id;
  await newListing.save();
  req.flash("success", "Successfully created a new listing!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  const listing = req.listing;
  res.render("listings/edit", { listing });
};

module.exports.update = async (req, res, next) => {
  const updatedListing = await Listing.findByIdAndUpdate(req.params.id, { ...req.body.listing });
  req.flash("success", "Successfully updated the listing!");
  res.redirect(`/listings/${req.params.id}`);
};

module.exports.destroy = async (req, res, next) => {
  const deletedListing = await Listing.findByIdAndDelete(req.params.id);
  console.log("Deleted listing:", deletedListing._id);
  req.flash("success", "Successfully deleted the listing!");
  res.redirect("/listings");
};