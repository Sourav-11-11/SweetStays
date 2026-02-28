const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

const listingRoutes = require("./routes/listing.js");
const reviewRoutes = require("./routes/review.js");

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

app.use("/listings", listingRoutes);
app.use("/listings/:id/reviews", reviewRoutes);


app.use((req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
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

