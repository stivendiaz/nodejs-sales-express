import { Knex } from 'knex';
import { config } from '../../src/config';
import Product from '../../src/models/Product';

export const up = (knex: Knex): Promise<void> => {
  knex.raw(`CREATE DATABASE IF NOT EXISTS ${config.dbName}`);
  knex.raw(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
  return knex.schema.createTable(
    Product.tableName,
    (table: Knex.TableBuilder) => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.timestamps(true, true);
      table.string('name');
      table.string('description');
      table.double('price');
    }
  );
};

export const down = (knex: Knex): Promise<void> =>
  knex.schema.dropTable(Product.tableName);
