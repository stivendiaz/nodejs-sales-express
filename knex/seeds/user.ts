import { Knex } from 'knex';
import User from '../../src/models/User';

const now = new Date();

const roles = [
  {
    id: '479fba0a-baaf-4b46-95a2-83a663817646',
    document: '123456789',
    name: 'Super',
    lastName: 'Admin',
    rolesId: '479fba0a-baaf-4b46-95a2-83a663817646',
    createdAt: now,
    updatedAt: now,
  },
];

export const seed = async (knex: Knex): Promise<void> => {
  await knex(User.tableName).del();
  await knex(User.tableName).insert(roles);
};
