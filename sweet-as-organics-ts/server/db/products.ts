import connection from './connection'
import product from '../../lib/interfaces/product'

module.exports = {
  listProducts
}

function listProducts(db = connection): product[] {
  return db('products').select()
}