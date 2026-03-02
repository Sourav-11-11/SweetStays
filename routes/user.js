const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const WrapAsync = require("../utils/WrapAsync.js");
const{saveRedirectUrl} = require("../middleware.js");

router.get("/signup", saveRedirectUrl, (req, res) => {
    res.render("listings/signup");
});

router.post("/signup", WrapAsync(async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "Successfully signed up! Welcome to Sweet Stays!");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    } 
}));

router.get("/login", (req, res) => {
    res.render("listings/login");
});

router.post("/login",saveRedirectUrl, passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: "Invalid username or password"
}), async(req, res) => {
    req.flash("success", "Welcome back to SweetStays!");
    res.redirect(res.locals.redirectUrl || "/listings");
});

router.get("/logout", (req, res,next) => {
    req.logout(function(err) {
        if (err) { return next(err); }  
        req.flash("success", "You have logged out successfully!");
        res.redirect("/listings");
    });
});

module.exports = router;