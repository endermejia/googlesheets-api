const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

// CORS
app.use(cors());
app.options('*', cors());

// ROUTES
app.use(require('./routes/google.routes'));


module.exports = app;
