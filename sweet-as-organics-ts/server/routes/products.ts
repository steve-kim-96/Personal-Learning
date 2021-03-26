import express from 'express'
import { listProducts } from '../db/products'
import productInterface from '../../lib/interfaces/product'
const router = express.Router()

module.exports = router

interface Products {
  products: productInterface[]
}

// "/" is api/v1/products
router.get('/', (_req, res) => {
  listProducts()
    .then((products: ) => {
      res.json(products)
      return null
    })
})

