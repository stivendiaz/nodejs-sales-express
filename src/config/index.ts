import * as dotenv from 'dotenv';

dotenv.config();

enum NodeEnv {
  TEST = 'test',
  DEV = 'development',
}

interface Env {
  env: NodeEnv;
  dbConnection: string;
  dbTestConnection: string;
  knexDebug: boolean;
  port: number;
}

export const config: Env = {
  env: (process.env.NODE_ENV as NodeEnv) || NodeEnv.DEV,
  dbConnection: process.env.PG_CONNECTION_STRING || '',
  dbTestConnection: process.env.PG_TEST_CONNECTION_STRING || '',
  knexDebug: process.env.KNEX_DEBUG === 'true',
  port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 5000,
};
