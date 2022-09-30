import { Knex } from "knex";
import Role from "../../src/models/Role";


export const up = (knex: Knex): Promise<void> =>
  knex.schema.createTable(Role.tableName, (table: Knex.TableBuilder) => {
    table.uuid("id")
      .primary();
    table.timestamps();
    table.string('name');
  });


  export const down = (knex: Knex): Promise<void> =>
  knex.schema.dropTable(Role.tableName);

