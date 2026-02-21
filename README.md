💬 MERN Real-Time Chat Application

A full-stack real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Socket.io for instant messaging.

🚀 Features

    🔐 User Authentication (JWT based)
    
    👤 User Registration & Login
    
    💬 One-to-One Real-Time Chat
    
    🟢 Online/Offline Status
    
    📨 Instant Messaging using Socket.io
    
    📂 Chat History Stored in MongoDB
    
    🎨 Clean & Responsive UI
    
    🔒 Protected Routes
    
    🧾 Logout Functionality

🛠 Tech Stack
Frontend

    ⚛️ React.js
    
    📦 Axios
    
    🔄 Context API / Redux (if used)
    
    🎨 CSS / Tailwind CSS (if used)
    
    Backend
    
    🟢 Node.js
    
    🚂 Express.js
    
    🔌 Socket.io
    
    🔐 JWT Authentication
    
    🔑 Bcrypt (Password Hashing)
    
    Database
    
    🍃 MongoDB
    
    🗂 Mongoose ODM

📁 Folder Structure
      mern-chat-app/
      │
      ├── backend/
      │   ├── models/
      │   ├── routes/
      │   ├── controllers/
      │   ├── middleware/
      │   ├── socket/
      │   └── server.js
      │
      ├── frontend/
      │   ├── src/
      │   │   ├── components/
      │   │   ├── pages/
      │   │   ├── context/
      │   │   └── App.js
      │
      └── README.md
      
⚙️ Installation & Setup
        1️⃣ Clone the Repository
          git clone https://github.com/your-username/mern-chat-app.git
          cd mern-chat-app
        2️⃣ Backend Setup
          cd backend
          npm install
          

Create a .env file inside backend folder:

    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key

    Run backend:

      npm start
    3️⃣ Frontend Setup
        cd frontend
        npm install
        npm start

Frontend will run on:

    http://localhost:3000

Backend runs on:

    http://localhost:5000
    🔌 Socket.io Flow

    User connects to server
    
    Socket ID is stored
    
    Real-time messages emitted using:
    
    socket.emit()
    
    socket.on()
    
    Messages stored in MongoDB
    
    Receiver gets message instantly

🔐 Authentication Flow

    User registers
    
    Password hashed using Bcrypt
    
    JWT token generated
    
    Token stored in localStorage
    
    Protected routes verified using middleware
    
    📸 Screenshots (Optional)

You can add screenshots like:
    
    Login Page
    
    Register Page
    
    Chat Interface
    
    Online Users Sidebar
    
    🌟 Future Improvements
    
    📎 File Sharing

👥 Group Chat

    🖼 Profile Pictures
    
    🔔 Notifications
    
    🌙 Dark Mode
    
    📱 Mobile Optimization
    
    📨 Typing Indicator
    
    🧠 Learning Outcomes
    
    Full-stack application architecture
    
    Real-time communication using WebSockets
    
    Authentication & Authorization
    
    REST API design
    
    State management in React

MongoDB schema design

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📜 License

This project is licensed under the MIT License.
