const express = require('express');
const {chats} = require("./data/data")
const dotenv = require("dotenv")
const PORT = process.env.PORT || 5782
dotenv.config()
const app = express();

app.get("/", (req, res) => {
    res.send("api is running sucessfully")
})

app.get("/api/chat", (req, res) => {
    res.send(chats)
})

app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find((c) => c._id == req.params.id);
    res.send(singleChat);
})

app.listen(PORT, console.log(`server is running on port {5782}`))