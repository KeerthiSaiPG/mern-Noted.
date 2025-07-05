# 📝 Noted. a MERN Notes App

A **Full-Stack Notes Application** built using the **MERN Stack** (MongoDB, Express, React, Node.js). This app allows users to **Create, Update, and Delete Notes** with ease. Designed to be fully responsive and beginner-friendly, it also integrates **real-world concepts** like **rate limiting**.

## 🚀 Features

- 🧱 **Full-Stack App with MERN Stack**
  - MongoDB for the database
  - Express.js for backend server
  - React.js for frontend
  - Node.js as the server environment

- ✨ **CRUD Functionality**
  - Create, Read, Update, and Delete notes with a **Title** and **Content**

- 🛠️ **Fully Functional REST API**
  - Built and tested with proper HTTP methods and status codes

- ⚙️ **Rate Limiting Using Upstash Redis**
  - Protects the API from abuse using Redis-based rate limiting  

- 🚀 **Responsive UI**
  - Works seamlessly on desktops, tablets, and mobile devices


## 💻 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Rate Limiting:** Upstash Redis
- **API Testing:** Postman
- **Deployment:** Render

---
## 🔗 Live Demo

[Click here to view the live app](https://mern-noted.onrender.com/) 

## Application 
![Home Page](./assets/Screenshot(208).png)
![Create Page](./assets/Screenshot(209).png)
![Update Page](./assets/Screenshot(211).png)
![All fields required](./assets/Screenshot(214).png)
![Note created](./assets/Screenshot(216).png)
![Note delete alert](./assets/Screenshot(217).png)
![Note deleted](./assets/Screenshot(218).png)
![Rate limit](./assets/Screenshot(219).png)

## 🧪 .env Setup

In the `backend/` folder, create a `.env` file with the following content:

```env
MONGO_URI=<your_mongo_uri>
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>
NODE_ENV=development
```

### 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

### 🔧 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```
