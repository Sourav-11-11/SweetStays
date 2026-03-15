<div align="center">

# 🧭 Sweet Stays

### *A full-stack property rental platform — built from scratch*

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mapbox](https://img.shields.io/badge/Mapbox-000000?style=for-the-badge&logo=mapbox&logoColor=white)](https://www.mapbox.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

**[Live Demo](https://sweetstays.onrender.com) · [Report Bug](#) · [Request Feature](#)**

</div>

---

## 🚀 What Is This?

**Sweet Stays** is an Airbnb-style property listing platform where users can **browse, list, and review stays** across locations. Built end-to-end — authentication, file uploads, interactive maps, reviews, and responsive UI — all without a frontend framework. Every feature is production-wired: cloud image storage, geospatial data, persistent sessions, and full CRUD with authorization guards.

> Built to demonstrate real-world full-stack skills: not a tutorial clone — every architectural and UX decision was made from scratch.

---

## ✨ Features at a Glance

| Area | What's Built |
|---|---|
| 🔐 **Auth** | Signup · Login · Logout via Passport.js local strategy with session persistence |
| 🏠 **Listings** | Full CRUD — create, view, edit, delete with ownership checks |
| 🗺️ **Maps** | Mapbox GL JS with live geocoding — every listing has a real interactive map |
| 📸 **Image Upload** | Cloudinary + Multer — drag & drop images stored in the cloud, not on disk |
| ⭐ **Reviews** | Star ratings + text reviews per listing with author attribution |
| 🔍 **Search & Filter** | Case-insensitive search by title/location + category filter pills (Trending, Mountains, Beach, Budget...) |
| 📱 **Responsive UI** | Mobile-first Bootstrap + custom CSS — search pill stacks, hero images resize, navbar adapts |
| 💬 **Flash Messaging** | UX feedback on every action — login, errors, success states |
| 🛡️ **Validation** | Joi schema validation server-side + middleware guards on all protected routes |

---

## 🛠️ Tech Stack


**Backend**
Node.js + Express.js — RESTful routing with MVC structure
MongoDB + Mongoose — document store with geospatial & reference models
Passport.js — local auth strategy with session-based persistence
connect-mongo — MongoDB-backed session store (no in-memory sessions)

**Frontend**
EJS + ejs-mate — server-side templating with reusable layouts
Bootstrap 5 — responsive grid + components
Custom CSS — branded navbar, search pill, card hover effects, sticky footer

**Integrations**
Mapbox GL JS — interactive maps + Mapbox Geocoding API for coordinates
Cloudinary + Multer — cloud image upload pipeline
method-override — enables PUT/DELETE from HTML forms


---

## 📁 Project Structure
```

sweet-stays/
├── controllers/          # Business logic (listings, users, reviews)
│   ├── listings.js       # CRUD + search/filter + geocode + Cloudinary
│   ├── users.js          # Signup, login, logout
│   └── reviews.js        # Create, delete reviews
├── routes/               # Express routers
│   ├── listing.js        # /listings — all listing routes
│   ├── user.js           # /signup, /login, /logout
│   └── review.js         # /listings/:id/reviews
├── models/               # Mongoose schemas
│   ├── listing.js        # Title, price, location, geometry, owner, reviews
│   ├── user.js           # Passport-local-mongoose user
│   └── review.js         # Rating, comment, author, timestamps
├── views/                # EJS templates
│   ├── layouts/          # boilerplate.ejs (base layout)
│   ├── listings/         # index, show, new, edit
│   ├── users/            # login, signup
│   └── includes/         # navbar, footer, flash
├── public/               # Static assets
│   ├── css/style.css     # All custom styles
│   └── js/map.js         # Mapbox init + marker + popup
├── middleware.js          # isLoggedIn, isOwner, validateListing, checkExists
├── schema.js             # Joi validation schemas
├── cloudConfig.js        # Cloudinary + multer storage config
├── utils/
│   ├── ExpressError.js   # Custom error class
│   └── WrapAsync.js      # Async error forwarding wrapper
├── init/                 # DB seed data with real geometry
└── app.js                # Server bootstrap, middleware, route mounting
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- Mapbox account (free tier works)
- Cloudinary account (free tier works)

### Installation
```bash
# 1. Clone the repo
git clone https://github.com/yourusername/sweet-stays.git
cd sweet-stays

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your keys (see below)

# 4. Seed the database (optional)
node init/index.js

# 5. Start the server
node app.js
# → http://localhost:8080
```

### Environment Variables
```env
ATLAS_URL=your_mongodb_connection_string
SECRET_KEY=your_session_secret
MAPBOX_TOKEN=your_mapbox_public_token
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
```

---

## 🗺️ How Key Features Work

**Geocoding Pipeline**
When a listing is created or updated, the location string is sent to the Mapbox Geocoding API → coordinates are stored as GeoJSON geometry in MongoDB → `map.js` reads this geometry on the show page and renders an interactive Mapbox GL JS map with a marker and popup.

**Image Upload Pipeline**
Form submits with `multipart/form-data` → `multer` intercepts the file → `multer-storage-cloudinary` streams it directly to Cloudinary → the returned URL and filename are saved to the listing document. No files ever touch the server disk.

**Auth & Authorization**
Passport.js manages login state via `passport-local-mongoose`. All mutating routes are guarded by `isLoggedIn` (session check). Edit/Delete routes additionally check `isOwner` (comparing `listing.owner` to `req.user._id`). Unauthorized access is rejected with a flash message and redirect.

---

## 📸 Screenshots

| Listings Feed | Single Listing  |
|---|---|
| ![index](public/images/Index.png) | ![show](public/images/Show.png) |

| Add Listing | Reviews |
|---|---|
| ![create](public/images/Create.png) | ![reviews](public/images/Review.png) |


---

## 🧠 What I Learned Building This

- Architecting a full MVC Express app from zero — no boilerplate, no generators
- Handling async errors cleanly with a `WrapAsync` HOF and a single error middleware
- Integrating third-party APIs (Mapbox, Cloudinary) into a full data pipeline
- Designing authorization logic that's DRY, reusable, and actually secure
- Making a server-rendered UI feel polished and responsive without React

---

## 🔮 Roadmap

- [ ] Real date availability + booking system
- [ ] Date/guest filters wired into search queries
- [ ] CSRF protection + rate limiting on auth routes
- [ ] Image optimization via Cloudinary transformations
- [ ] 404 and empty-state UI improvements
- [ ] Map cluster view for multiple listings

---

## 📄 License

MIT © Vemuru Sourav(https://github.com/Sourav-11-11)

---

<div align="center">

**If you found this interesting, give it a ⭐ — it helps more than you think.**

</div>
