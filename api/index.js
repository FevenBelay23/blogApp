const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    const{username, password} = req.body;
    res.json({requestData:{username, password}});
});

app.listen(4000);
// mongodb+srv://blog:7k2vL8mdnsRPan8a@cluster0.z7ykgom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// 7k2vL8mdnsRPan8a