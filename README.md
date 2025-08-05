# 🔗 URL Shortener API

A lightweight and functional **URL Shortener API** built using **Node.js**, **Express**, and **MongoDB**. This service generates a short URL for any given long URL and tracks visit analytics.

---

## 🚀 Features

- ✅ Shortens long URLs using unique short IDs (via `shortid`)
- 🔁 Redirects short URLs to original destinations
- 📊 Tracks analytics: number of visits and timestamps
- 🌐 Simple REST API structure
- 🗃️ MongoDB for storing URL and visit history

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- shortid
- dotenv

---

## 📁 Project Structure

url-shortener/

├── controllers/

│ └── url.js

├── models/

│ └── url.js

├── routes/

│ └── url.js

├── connect.js

├── index.js

├── package.json

├── .env

├── .gitignore

└── README.md

2. Install dependencies
bash
Copy
Edit
npm install
3. Create a .env file in the root folder:
env
Copy
Edit
PORT=8000
MONGODB_URI=mongodb://localhost:27017/Short-ID
Replace the MongoDB URI if you're using a cloud-hosted database like MongoDB Atlas.

4. Start the server
bash
Copy
Edit
npm start
Server runs on http://localhost:8000
