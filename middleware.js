const express = require("express");

const app = express();

app.use(express.json());

const getToken = async function  (req, res, next){
    var token = req.headers["token"];

    if (token === null || token == undefined || token == ""){
         res.status(500).json({"message": "Unauthorized"})
    }
    res.status(200).json({"message": "authorized"});
    next();
}

module.exports = { getToken }