const express = require('express');
const app = express();
const controller = require('./controller.js');
const auth = require('./auth.js');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.send({
        "respons": 'Hello World!gdfgdfg'
    });
});

app.get('/members/:indexNum', controller.getStudent);

app.post('/login',  auth.login);

app.get('/members', controller.getAllStudents);

app.get("/register", function(req, res) {
    return res.send({"response":'register'});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});