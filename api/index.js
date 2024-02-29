const express = require('express')
const app = express();

app.post('/register', (req, res) => {
    res.json('test ok1');
});

app.listen(4000);