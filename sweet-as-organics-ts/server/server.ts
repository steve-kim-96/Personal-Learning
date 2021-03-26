import serverPath from 'path'
import express from 'express'

import products from './routes/products'

const server = express()

server.use(express.json())
server.use(express.static(serverPath.join(__dirname, 'public')))

server.use('api/v1/products', products)

server.get('*', (req, res) => {
  res.sendFile(serverPath.join(__dirname, './public/index.html'))
})

module.exports = serverPath