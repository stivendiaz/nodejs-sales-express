import { Knex } from "knex";
import Product from "../../src/models/Product";
import Sale from "../../src/models/Sale";
import User from "../../src/models/User";

export const up = (knex: Knex): Promise<void> =>
  knex.schema.createTable(Sale.tableName, (table: Knex.TableBuilder) => {
    table.uuid("id")
    .primary()
    .defaultTo(knex.raw('gen_random_uuid()'));
    table.timestamps(true, true);
    table.uuid('productId');
    table.uuid('usersId');
    table.integer('qty');
    table.date('saleAt');
    table.foreign('productId').references('id').inTable(Product.tableName);
    table.foreign('usersId').references('id').inTable(User.tableName);
  });

  export const down = (knex: Knex): Promise<void> =>
  knex.schema.dropTable(Sale.tableName);

