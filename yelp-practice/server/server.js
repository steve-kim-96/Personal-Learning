const express = require('express');
const path = require('path');
const app = express();

const route = require('./restAPI/routes')

app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))

app.use('/api/v1', route)

module.exports = app
