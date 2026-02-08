# 🏡 SweetStays – Full Stack Travel & Stay Booking Web Application

SweetStays is a modern full-stack web application inspired by Airbnb that allows users to explore, list, and book unique stays across different locations.  
The platform focuses on clean UI, secure authentication, real-time data handling, and a scalable backend architecture.

Built as a hands-on learning project to strengthen real-world development skills in full-stack engineering, database design, and production-level project structure.

---

## 🚀 Live Features

✅ User Authentication & Authorization  
✅ Create, Edit & Delete Property Listings  
✅ Image Upload & Listing Management  
✅ Reviews & Ratings System  
✅ Interactive Maps Integration  
✅ Secure Payment Integration (Razorpay)  
✅ Responsive UI for All Devices  
✅ RESTful Backend Architecture  

---

## 🛠️ Tech Stack

### 💻 Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap
- EJS Templating

### ⚙️ Backend
- Node.js
- Express.js
- REST APIs

### 🗄️ Database
- MongoDB
- Mongoose ODM

### 🔐 Authentication & Security
- Passport.js
- Session Authentication
- Data Validation & Sanitization

### 🌐 Integrations
- Leaflet.js (Maps)
- Razorpay (Payments)

---

## 📂 Project Structure

```
SweetStays/
│
├── models/        → Database schemas
├── routes/        → Express route handlers
├── views/         → EJS frontend templates
├── public/        → Static assets (CSS, JS, Images)
├── utils/         → Helper functions & middleware
├── app.js         → Main server file
└── data.js        → Sample database seed data
```

---

## ⚡ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Sourav-11-11/SweetStays.git
```

### 2️⃣ Navigate to Project
```bash
cd SweetStays
```

### 3️⃣ Install Dependencies
```bash
npm install
```

### 4️⃣ Setup Environment Variables
Create a `.env` file and add:

```
MONGO_URL=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
RAZORPAY_KEY=your_payment_key
```

### 5️⃣ Run Server
```bash
nodemon app.js
```

Server runs on:
```
http://localhost:8080
```

---

## 🎯 Key Learning Outcomes

- Designed a scalable MVC architecture
- Built secure authentication systems
- Implemented RESTful API design
- Managed real database relationships
- Integrated third-party APIs & payment gateways
- Developed a production-style full-stack project

---

## 👨‍💻 Author

**Sourav Vemuru**  
Full Stack Developer | Computer Science Student  

🔗 GitHub: https://github.com/Sourav-11-11  

---

## ⭐ Future Improvements

- Real-time booking system
- Chat between host & guest
- Cloud image storage (AWS S3 / Cloudinary)
- Deployment with Docker
- Admin Dashboard

---

## 📜 License

This project is built for educational and portfolio purposes.
