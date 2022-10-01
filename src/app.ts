import express from 'express';
import { appLogger, errorLogger } from './logger';
import router from './router';

const app = express();

app.disable('etag');
app.use(express.json());
app.use(appLogger);
app.use('/api/v1',router);
app.use(errorLogger);

export default app;
