import { Knex } from 'knex';
import Role from '../../src/models/Role';
import User from '../../src/models/User';

export const up = (knex: Knex): Promise<void> =>
  knex.schema.createTable(User.tableName, (table: Knex.TableBuilder) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.timestamps(true, true);
    table.string('document');
    table.string('lastName');
    table.string('name');
    table.uuid('rolesId');
    table.foreign('rolesId').references('id').inTable(Role.tableName);
  });

export const down = (knex: Knex): Promise<void> =>
  knex.schema.dropTable(User.tableName);
