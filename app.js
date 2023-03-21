const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send({"respons":'Hello World!gdfgdfg'});
});

app.get('/members/:indexNum', (req, res) => {
    return res.send(req.params.indexNum);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});