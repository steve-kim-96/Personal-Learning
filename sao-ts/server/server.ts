import express, { Request, Response } from 'express'

const products = require('./routes/products')
const path = require('path');
const app = express();

app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/v1/products', products)

app.get('*', function (req: Request, res: Response) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app
