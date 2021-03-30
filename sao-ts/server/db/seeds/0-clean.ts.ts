import { Knex } from 'knex'
exports.seed = (knex: Knex) => {
    const empty = (table: any) =>
      () => knex(table).del()
  
    return empty('products')()
    // .then(empty('table_name'))
  }