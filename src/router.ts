import { Request, Response, Router } from 'express';

import * as productsController from './controllers/productsController';
const router = Router();

router
  .get('/', (req: Request, res: Response) => res.send('Hello World!'))
  .get('/products', productsController.list)
  .get('/products/:id', productsController.get)
  .put('/products/:id', productsController.update)
  .delete('/products/:id', productsController.remove)
  .post('/products', productsController.create)

export default router;
