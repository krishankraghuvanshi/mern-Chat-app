const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { chats } = require("./data/data");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    console.log('Content-Type:', req.get('content-type'));
    console.log('Body:', req.body);
    next();
});

app.get("/", (req, res) => {
    res.send("API is running successfully");
});

app.use("/api/user", userRoutes);
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 400 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

const PORT = process.env.PORT || 5782;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.yellow.bold);
});