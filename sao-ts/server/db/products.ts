import connection from './connection'

module.exports = {
  listProducts
}

interface Products { 
  products: {id: number, name: string, description: string, country: string}[]
 }

function listProducts(db = connection): Products {
  return db('products').select()
}