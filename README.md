# 🌍 LangLearn - Language Learning Application

An interactive, full-stack web application designed to help users learn new languages through real-time communication, structured lessons, and a seamless user experience.

## 🚀 Features

- 🌐 Real-time **video calling and messaging** via **Stream API**
- 🔐 **JWT-based authentication** for secure user sessions
- 📚 Interactive and structured **language learning modules**
- ⚡ **TanStack Query** for efficient data fetching and caching
- 🎨 Beautiful, responsive UI built with **Tailwind CSS**
- 💬 Seamless communication between users and tutors
- 🧠 Session management to track user progress

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, TanStack Query
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Communication**: Stream API (Video & Chat)

---

## 📦 Installation

### Prerequisites

- Node.js and npm installed
- MongoDB database (local or cloud, like MongoDB Atlas)
- Stream API credentials (create an account at [getstream.io](https://getstream.io))

### Clone the Repository

```bash
git clone 
cd language-learning-app
```

### Backend Setup
```bash
cd backend
npm install
```
- Create a .env file in the backend folder:

```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

Start the backend server:

```bash
npm start
```

### Frontend Setup

```bash
cd ../frontend
npm install
```

- Create a .env file in the frontend folder:

```bash
VITE_API_BASE_URL=http://localhost:5000
VITE_STREAM_API_KEY=your_stream_api_key
```

### Start the frontend:

```bash
npm run dev
git clone https://github.com/Udayhrmt45/LangLearn.git
cd language-learning-app
```
