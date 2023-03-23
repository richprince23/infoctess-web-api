const db = require('./db.js');
const express = require('express');
const app = express();
app.use(express.json());

module.exports = {
    login : function(req, res){
        const { username, password } = req.body;
        console.log(username, password);
        db.login(username, password, function(err, result){
            if(err){
                console.log(err);
                return res.status(500).json(err);
            }else{
                console.log(result);
                return res.status(200).json(result);
            }
        });
    }

}