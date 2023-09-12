const express = require('express');
const morgan  = require("morgan")

const server = express();


server.use(morgan("dev"));
server.use(express.json());
server.use(require("./routes"));
server.use("*", (req,res)=>{
    res.status(404).send("notfound")
})

module.exports = server;