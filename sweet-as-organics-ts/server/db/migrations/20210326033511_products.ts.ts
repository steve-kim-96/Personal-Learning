import { Knex } from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('products', table => {
    table.increments('id')
    table.string('description')
    table.string('name')
    table.string('country')
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('products')
}

