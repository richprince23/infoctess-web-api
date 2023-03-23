const express = require('express');
const app = express();
const db = require('./db.js');

app.get('/', (req, res) => {
    return res.send({"respons":'Hello World!gdfgdfg'});
});

app.get('/members/:indexNum', db.getStudent);

app.post('/login ', (req, res) => {
    
});
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});