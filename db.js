
const mysql = require('mysql2');
// const bcrypt = require('bcrypt');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    // user: 'infocte9_infoctess_admin',
    // password: 'dRwX7p1t{Q?K',
    // database: 'infocte9_infoctess_db',
    database: 'infoctess'
    // waitForConnections: true,
    // connectionLimit: 10,
    // maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    // idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    // queueLimit: 0
});

module.exports = pool.promise();