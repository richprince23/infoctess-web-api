const express = require('express');
const app = express();
const db = require('./db.js');
const pool = db.pool;

module.exports = {
    getStudent: function(req, res) {
        const id = req.params.indexNum;
        pool.query('SELECT * FROM members WHERE index_num = ?', [id], function (error, results) {
            if (error) throw error;
            if (results.length == 0) {
                return res.status(200).json([]);
            } else {
            return res.status(200).json(results);
            }
        });
    },

    delStudent: function(req, res) {
        const id = req.params.indexNum;
        const email = req.params.email;
        pool.query('DELETE from members WHERE index_num = ? and email = ?', [id, email], function (error, results) { 
            if (error) return res.sendFile(__dirname + "/failed.html");
            return res.sendFile(__dirname + "/success.html");
        });
    },

    addBulkStudents: function(req, res) {
        const data = req.body;
        pool.query('INSERT INTO members (index_num, name, email, phone) VALUES ?', [data], function (error, results) {
            if (error) throw error;
            return res.status(200).json(results);
        });
    },
    getAllStudents:  function(req, res) {
        pool.query('SELECT * FROM members', function (error, results) {
            if (error) throw error;
            if (results.length == 0) {
                return res.status(200).json([]);
            } else {
            return res.status(200).json(results);
            }
        });
    },

    getStudentsByGender: function(req, res) {
        const gender = req.params.gender;
        pool.query("Select * from members where gender = '" + gender +"'" , function (error, results) {
            if (error) throw error;
            if (results.length == 0) {
                return res.status(200).json([]);
            } else { 
            return res.status(200).json(results);
            }
        });
    },

    
    getStudetsByLevel: function(req, res) {
        const level = req.params.level;
        pool.query("select * from members where level = '"+ level + "'", function (error, results) {
            if (error) throw error;
            if (results.length == 0) {
                return res.status(200).json([]);
            } else {
            return res.status(200).json(results);
            }
        });
    },

    
}

