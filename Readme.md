# Chatty 💬 – A Real-Time MERN Chat Application

**Chatty** is a full-stack real-time chat application built using the **MERN stack** with **Vite** for blazing-fast frontend development. It enables users to exchange messages and share photos instantly using **Socket.IO**, while offering a visually engaging, theme-customizable interface.

---

## 🚀 Features

- 🔁 **Real-time Messaging** – Powered by **Socket.IO**, enabling instant communication.
- 🖼️ **Photo Sharing** – Seamless image sharing between users in chat.
- 🎨 **36 Dynamic Themes** – Personalize chat interface from 36 theme presets.
- 🧑‍💼 **Profile Picture Management** – Users can upload and update profile pictures.
- 🟢 **Online/Offline Indicator** – Shows real-time user availability in chat list.
- 🔐 **Secure Authentication** – Backend protected with **JWT-based authentication**.
- ✅ **Postman Tested** – All backend routes tested using **Postman** for stability.
- 🖥️ **Responsive Frontend UI** – Built with **React + Vite** and supports theme switching.
- 🗃️ **MongoDB Integration** – Efficient storage and retrieval of users and messages.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Frontend (Vite + React)** | UI development |
| **Backend (Node.js + Express)** | API & WebSocket server |
| **Socket.IO** | Real-time messaging |
| **MongoDB + Mongoose** | NoSQL database |
| **JWT (jsonwebtoken)** | Auth and route protection |
| **Postman** | API testing |
| **Tailwind CSS** | Styling and theme support |

---

## 📁 Project Structure

Chatty/
├── Api/ # Backend code
│ └── src/
│ ├── controllers/ # Request handling logic
│ ├── lib/ # Utility functions (e.g., socket handling)
│ ├── middlewares/ # Middleware (JWT auth, error handling, etc.)
│ ├── models/ # Mongoose models (User, Message)
│ ├── routes/ # Express routes (auth, chat, user)
│ ├── seeds/ # Seed data scripts (optional)
│ └── index.js # Entry point (Express server + Socket.IO setup)
│
├── Frontend/ # Frontend code
│ ├── dist/ # Production build output (generated)
│ ├── public/ # Static assets
│ ├── node_modules/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── constants/ # App-wide constants (e.g., theme list)
│ │ ├── lib/ # Utility functions or services
│ │ ├── pages/ # App pages (Chat, Login, Register)
│ │ ├── store/ # Global state management (e.g., user, messages)
│ │ └── main.jsx # App entry point
│ ├── index.html
│ └── vite.config.js


---

## 🔧 Getting Started

### 📦 Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Postman (for API testing)

---

### ⚙️ Installation & Setup

1. **Clone the Repository**
```bash
git clone https://github.com/royayush2099/chatty.git
cd chatty

Backend Setup (API)
cd Api
npm install
Create a .env file inside Api/ with the following:
MONGODB_URL=yourMongourl
PORT=
JWT_SECRET=
NODE_ENV=

Start the server:
npm start

Frontend Setup:
cd ../Frontend
npm install
npm run dev

Access frontend at: http://localhost:5173

🔐 Authentication
JWT-based login & registration

Tokens stored securely

Middleware validates token and restricts access to protected routes

API Testing with Postman
You can test all routes using Postman. Make sure to:

Add Authorization: Bearer <your_token> header for protected endpoints

Test endpoints like /login, /register, /messages, etc.

📷 Screenshots
Coming soon! UI preview and chat theme demos.

 Future Improvements
📱 Mobile PWA support

🔔 Push Notifications

🌐 Language Localization

🧑‍🤝‍🧑 Group Chat Support

🤝 Contributing
Contributions are welcome!
Feel free to fork the project and open a pull request.

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Ayush Roy
🌐 GitHub
📧 Email: royayush2099@gmail.com 


