const {
    json
} = require('express/lib/response');
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    // user: 'root',
    user: 'infocte9_infoctess_admin',
    password: 'dRwX7p1t{Q?K',
    database: 'infocte9_infoctess_db',
    // waitForConnections: true,
    // connectionLimit: 10,
    // maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    // idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    // queueLimit: 0
});

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
    }


}

// export default { getStudent };