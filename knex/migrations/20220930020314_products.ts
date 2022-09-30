import { Knex } from "knex";
import Product from "../../src/models/Product";

export const up = (knex: Knex): Promise<void> =>
  knex.schema.createTable(Product.tableName, (table: Knex.TableBuilder) => {
    table.uuid("id")
      .primary();
    table.timestamps();
    table.string('description');
    table.string('name');
    table.double('price');
  });


  export const down = (knex: Knex): Promise<void> =>
  knex.schema.dropTable(Product.tableName);
