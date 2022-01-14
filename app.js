const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.listen(4000, () => {
    console.log('Servidor funcionando');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});