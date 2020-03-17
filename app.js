const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();


const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');

const accessLogStream = fs.createWriteStream( //writting morgan logs to file
    path.join(__dirname, 'access.log'),
    { flags: 'a'} //append new logs and not override files
);

app.use(express.json());
app.use(morgan('combined', {stream: accessLogStream}));
app.use(helmet());
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    next();
});



app.use('/', usersRoutes);
app.use('/products', productsRoutes);

app.get('/', (req, res) => {
    res.send('sanity check!')
});

module.exports = app