const express = require("express");
const app = express();
const http = require("http");
const socketIo = require("socket.io");


const server = http.createServer(app);
const io = socketIo(server);

app.set("view engine", "ejs")

io.on("connection", function(socket){
    socket.on("abcd", function(data){
        io.emit("defg");
    })
})

app.get("/", (req, res) =>{
    res.render("index")
})

server.listen(3000)