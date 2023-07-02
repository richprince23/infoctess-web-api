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
        pool.query('DELETE FROM members WHERE index_num = ?', [id], function (error, results) { 
            if (error) throw error;
            return res.status(200).json(results);
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
    }
,   
    

}

