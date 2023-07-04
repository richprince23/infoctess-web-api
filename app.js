const express = require('express');
const app = express();
const controller = require('./controller.js');
const auth = require('./auth.js');
const cors = require('cors');
const verify = require("./middleware.js").getToken;

app.use(express.json());
app.use(cors());

// app.use(verify);
app.get('/',  verify, function(req, res)  {
 
return res.send({"response": "Done!"});
});

app.get('/members/:indexNum',  controller.getStudent);

app.post('/login',  auth.login);

app.get('/members', controller.getAllStudents);
app.get('/members/level/:level', controller.getStudetsByLevel);
app.get("/members/gender/:gender", controller.getStudentsByGender); 

app.get("/register", function(req, res) {
    return res.send({"response":'register'});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});