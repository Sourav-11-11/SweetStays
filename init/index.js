const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require("../models/listing.js");

const MONGO_URL= "mongodb://localhost:27017/sweetstays";


main()
    .then(() => {
        console.log("Connected to MongoDB");
        return initDB();
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({}); // Clear existing listings
    await Listing.insertMany(initData.data); // Insert initial data
    console.log("Database initialized with sample data");
}