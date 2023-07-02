const express = require('express');
const app = express();
const db = require('./db.js');
const controller = require('./controller.js');
const pool = db.pool;

module.exports = {
    login :  async function(req, res) {
        const email = req.body.email;
        const password = req.body.password; 

         pool.query('SELECT * FROM api_admin WHERE email = ?', [email], function (error, results) {
            if (error) return res.status(500).json(error);
            if (results.length == 0) {
                // return res.status(200).json([]);
                return res.status(200).json({"message": "Email is incorrect", "access": "denied"});
            } else {
                // bcrypt.compare(password, hashedPassword, function(err, result) {
                //     if (err) return false;
                //     if (result) {
                //      return true;
                //     } else {
                //       // passwords don't match
                //       console.log('Passwords do not match!');
                //       return false;
                //     }
                //   });
                // console.log(results[0]);
                if (password == results[0].password) {
                    
                    // results =  controller.getAllStudents;
                    // return res.status(200).json({"message": "Login successful", "access": "granted", 'userName': results[0].surname, 'userEmail': results[0].fullname });
                    return res.status(200).json({"message": "Login successful", "access": "granted", 'email': results[0].email, 'userName': results[0].fullname });
                }
                else {
                    return res.status(200).json({"message": "Password is incorrect", "access": "denied"});
                }
            }
        });
    }
}