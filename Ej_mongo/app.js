const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://berenice:1234567654321@cluster0-o2qfz.azure.mongodb.net/test?retryWrites=true&w=majority';

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({message: 'Server ON'})
});





