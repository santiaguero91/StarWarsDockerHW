const express = require('express');
const app = express();
const morgan = require('morgan');
const mainRoute = require('./routes/index')

app.use(morgan('dev'));
app.use(mainRoute)

module.exports = app;