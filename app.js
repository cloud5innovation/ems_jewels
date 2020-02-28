const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const path = require('path')
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

app.use('/', usersRoutes);
app.use('/products', productsRoutes);

app.get('/', (req, res) => {
    res.send('sanity check!')
});

module.exports = app