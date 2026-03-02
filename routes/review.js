const express = require("express");
const router = express.Router({ mergeParams: true });
const WrapAsync = require("../utils/WrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");


const validateReview = (req, res, next) => {
    if (!req.body.review) {
        throw new ExpressError("Send valid data for review", 400);
    } 
    const { error } = reviewSchema.validate(req.body);
    if (error) {
      let errorMessage = error.details.map(el => el.message).join(", ");
        throw new ExpressError(errorMessage, 400);
    } else {
        next();
    } 
};

//review route
router.post("/",
  validateReview, 
  WrapAsync(async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  const newReview = new Review(req.body.review);

  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
  req.flash("success", "Successfully added a new review!");
  res.redirect(`/listings/${id}`);
})
);

//delete review route
router.delete("/:reviewId", WrapAsync(async (req, res, next) => {
  const { id: listingId, reviewId } = req.params;
  await Listing.findByIdAndUpdate(listingId, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Successfully deleted the review!");
  res.redirect(`/listings/${listingId}`);
}));


module.exports = router;

