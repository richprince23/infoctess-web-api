const express = require('express');
const app = express();
const db = require('./db.js');
const auth = require('./auth.js');

app.get('/', (req, res) => {
    return res.send({"respons":'Hello World!gdfgdfg'});
});

app.get('/members/:indexNum', db.getStudent);

// app.post('/login ', auth.login);
app.get('/login-user ', auth.loginUser);

app.get("/register", function(req, res) {
    return res.send({"response":'register'});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});