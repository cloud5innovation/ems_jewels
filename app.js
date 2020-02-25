const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
    res.send('sanity check')
});

module.exports = app