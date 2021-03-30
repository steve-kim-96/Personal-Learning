import express, { Request, Response } from 'express'

const products = require('../db/products')
const router = express.Router()

module.exports = router

interface Products { 
 products: {id: number, name: string, description: string, country: string}[]
}

// "/" is api/v1/products
router.get('/', (req: Request, res: Response) => {
  products.listProducts()
    .then((products: Products) => {
      res.json(products)
      return null
    })
})

