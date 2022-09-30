import * as path from 'path';
import objection from 'objection';
import { config } from './src/config';

const defaultKnexConfig = {
  client: 'pg',
  migrations: {
    tableName: 'knex_migrations',
    directory: path.resolve('knex/migrations'),
  },
  seeds: {
    directory: path.resolve('knex/seeds'),
  },
  ...objection.knexSnakeCaseMappers(),
  useNullAsDefault: true,
};

export default {
  development: {
    ...defaultKnexConfig,
    connection: config.dbConnection,
  },
  test: {
    ...defaultKnexConfig,
    connection: config.dbTestConnection,
  },
};
