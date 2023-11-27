const express = require('express');
const app = express();
require('./db/conn')

app.get('/', (req, res) => {
    res.send("Hello server.js from E-commerce Backend")
})

const PORT = 5000;

app.listen(PORT, (req, res) => {
    console.log(`Server is running on ${PORT}`)
})