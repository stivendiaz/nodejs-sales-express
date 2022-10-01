import { Knex } from 'knex';
import Product from '../../src/models/Product';

const now = new Date();

const products = [
  {
    id: '479fba0a-baaf-4b46-95a2-83a663817646',
    name: 'Arroz',
    description: 'Libra',
    price: 3000,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'efbff7f6-6374-4c2f-9c96-3611c65068ba',
    name: 'Papas',
    description: 'Libra',
    price: 1000,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'f7c377cf-0f92-435a-b5e6-2c8cdd9d10c6',
    name: 'Agua sin gas',
    description: '500 ml',
    price: 2000,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: '3bed5d90-64ed-4bc1-8a3a-a378737ed542',
    name: 'Agua con gas',
    description: '500 ml',
    price: 2500,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'c3f25f98-c5c3-4a00-b550-f716ae36b25f',
    name: 'Docena de huevos',
    description: 'ministro de haciendo aprueba',
    price: 1800,
    createdAt: now,
    updatedAt: now,
  },
];

export const seed = async (knex: Knex): Promise<void> => {
  await knex(Product.tableName).del();
  await knex(Product.tableName).insert(products);
};
