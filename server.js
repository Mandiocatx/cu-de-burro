const express = require("express");
const app = new express();

const PORT = "8000";

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html")
})

app.listen(PORT, (req, res) => {
    console.log("Servidor Rodando em: http://localhost:8000")
})


