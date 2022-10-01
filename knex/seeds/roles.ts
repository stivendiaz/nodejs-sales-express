import { Knex } from 'knex';
import Role from '../../src/models/Role';

const now = new Date();

const roles = [
  {
    id: "479fba0a-baaf-4b46-95a2-83a663817646",
    name: "Admin",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "efbff7f6-6374-4c2f-9c96-3611c65068ba",
    name: "Employee",
  },
];

export const seed = async (knex: Knex): Promise<void> => {
  await knex(Role.tableName).del();
  await knex(Role.tableName).insert(roles);
};
