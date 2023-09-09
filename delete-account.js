const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// Middleware for parsing JSON and form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the HTML form
app.get('/request-delete', (req, res) => {
  res.send(`
    <html>
    <head>
        <title>Account Deletion Request</title>
    </head>
    <body>
        <h1>Account Deletion Request</h1>
        
        <form method="POST" action="/delete_account">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>
            
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            
            <label for="reason">Reason for Deletion:</label>
            <textarea id="reason" name="reason" rows="4" required></textarea><br><br>
            
            <input type="submit" value="Submit Request">
        </form>
    </body>
    </html>
  `);
});

// Handle account deletion request
app.post('/delete_account', (req, res) => {
  const { username, password, reason } = req.body;

  // Perform the deletion operation in your MySQL database
  const sql = 'DELETE FROM members WHERE index_num = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error deleting account:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    if (result.affectedRows === 0) {
      res.send('Account deletion failed. Please check your credentials.');
    } else {
      res.send('Account deleted successfully.');
    }
  });
});


