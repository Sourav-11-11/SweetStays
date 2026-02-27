const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const WrapAsync = require("./utils/WrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");

const MONGO_URL= "mongodb://localhost:27017/sweetstays";

main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);


app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

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
app.get("/listings", WrapAsync(async (req, res) => {
  const allListings = await Listing.find({}).select("title description price image _id").lean();
  res.render("listings/index", {allListings});
}));

//new route
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});

//Show Route
app.get("/listings/:id", WrapAsync(async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    return next(new ExpressError("Listing not found", 404));
  }
  res.render("listings/show", { listing });
}));


//Create Route
app.post(
    "/listings",
    validateListing,
    WrapAsync(async (req, res, next) => {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    })
);


//Edit Route
app.get(
    "/listings/:id/edit",
    validateListing,
    WrapAsync(async (req, res) => {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        res.render("listings/edit", { listing });
    })
);

//Update Route
app.put("/listings/:id", 
  validateListing,
  WrapAsync(async (req, res, next) => {
    let { id } = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));


//delete route
app.delete("/listings/:id", WrapAsync(async (req, res, next) => {
  let { id } = req.params;
  const deletedListing = await Listing.findByIdAndDelete(id);
  if (!deletedListing) {
    return next(new ExpressError(404, "Listing not found"));
  }
  console.log("Deleted listing:", deletedListing._id);
  res.redirect("/listings");
}));


// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//         location: "Malibu, California",
//         country: "USA"
//     });

//     await sampleListings.save();
//     res.send("Sample listing created");
// });

app.use((req, res, next) => {
  next(new ExpressError(404,"Page Not Found"));
});

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err); 
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";
  res.status(statusCode).render("error", { statusCode, message });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080")
});

