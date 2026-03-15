const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Review = require('./review.js');

const listingSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    description: String,
     
    image: {
        url: String,
        filename: String,
    },

    price: Number,
    location: String, 
    country: String,
    category: {
        type: String,
        enum: [
            "trending",
            "rooms",
            "locations",
            "top-rated",
            "budget",
            "mountains",
            "nature",
            "camping",
            "city",
            "beachs",
            "cabins",
            "unique-stays"
        ],
        default: "trending"
    },
   
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    geometry: {
        type: {
            type: String, 
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            default: [78.4772, 17.4065]
        }
    }
});

listingSchema.post("findOneAndDelete", async function(listings) {
  if(listings){ 
    await Review.deleteMany({ _id: { $in: listings.reviews } });
  }
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;