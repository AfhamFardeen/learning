const express = require('express');
const http = require('http');
const data = require('./dataBase')

const app = express();
const port = 3001;

httpserver = http.createServer(app);

app.get('/', (req, res) => {
    return res.send('hello world');
});

app.get('/getdata', (req, res) => {
    return res.json(data);
});


httpserver.listen(port, () => {
    console.log(`Server started on ${port}`);
})