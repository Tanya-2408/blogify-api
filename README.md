# 🚀 Blogify API

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express.js-Backend-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Stripe](https://img.shields.io/badge/Payments-Stripe-purple)
![Cloudinary](https://img.shields.io/badge/Storage-Cloudinary-blue)

A **RESTful API for a modern blogging platform** built using Node.js and Express.  
It supports secure authentication, post management, image uploads, payment processing, and order management.

Designed with scalability, clean architecture, and production-ready practices.

---

## 📌 Features

- 🔐 JWT-based User Authentication (Register/Login)
- 📝 Full CRUD operations for blog posts
- ☁️ Image uploads using Cloudinary
- 💳 Stripe payment integration
- 📦 Order management system
- 📄 Cursor-based pagination for posts
- 🌍 MongoDB Atlas cloud database
- 🛡️ Protected routes using authentication middleware
- ⚡ Clean RESTful API architecture

---

## 🛠️ Tech Stack

- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Database:** MongoDB with Mongoose ODM  
- **Authentication:** JSON Web Tokens (JWT)  
- **File Storage:** Cloudinary  
- **Payment Processing:** Stripe  
- **Cloud Database:** MongoDB Atlas  

---

## 📋 Prerequisites

Make sure you have:

- Node.js (v18 or later)
- npm or yarn
- MongoDB Atlas account
- Cloudinary account
- Stripe account

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/blogify-api.git
cd blogify-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Database
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/blogify

# JWT
JWT_SECRET=your_secure_random_secret
JWT_EXPIRES_IN=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...

# Server
PORT=5000
```

---

## ▶️ Running the Project

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 🔐 Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|------------|---------------|
| POST | `/api/auth/register` | Register new user | ❌ |
| POST | `/api/auth/login` | Login user | ❌ |

---

### 📝 Posts

| Method | Endpoint | Description | Auth Required |
|--------|----------|------------|---------------|
| GET | `/api/posts` | Get all posts (cursor pagination) | ❌ |
| GET | `/api/posts/:id` | Get single post | ❌ |
| POST | `/api/posts` | Create post | ✅ |
| PUT | `/api/posts/:id` | Update post | ✅ |
| DELETE | `/api/posts/:id` | Delete post | ✅ |

---

### ☁️ Upload

| Method | Endpoint | Description | Auth Required |
|--------|----------|------------|---------------|
| POST | `/api/upload` | Upload image to Cloudinary | ✅ |

---

### 💳 Payments

| Method | Endpoint | Description | Auth Required |
|--------|----------|------------|---------------|
| POST | `/api/payments/create-payment-intent` | Create Stripe payment intent | ❌ |
| POST | `/api/payments/confirm-payment` | Confirm payment | ❌ |

---

### 📦 Orders

| Method | Endpoint | Description | Auth Required |
|--------|----------|------------|---------------|
| POST | `/api/orders` | Create order | ✅ |
| GET | `/api/orders/my-orders` | Get logged-in user's orders | ✅ |
| GET | `/api/orders/:id` | Get order details | ✅ |

---

## 🗂️ Project Structure

```bash
blogify-api/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── utils/
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository  
2. Create a new branch  
3. Commit your changes  
4. Push to your branch  
5. Open a Pull Request  

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Tanya  
GitHub: https://github.com/Tanya-2408  
Email: tanya.a.s111@kalvium.community

---

## ⭐ Support

If you find this project useful, consider giving it a star on GitHub!
