import { Request, Response, Router } from 'express';

import * as productsController from './controllers/productsController';
import * as rolesController from './controllers/rolesController';
const router = Router();

router
  .get('/', (req: Request, res: Response) => res.send('Hello World!'))
  .get('/products', productsController.list)
  .get('/products/:id', productsController.get)
  .put('/products/:id', productsController.update)
  .delete('/products/:id', productsController.remove)
  .post('/products', productsController.create)
  .get('/roles', rolesController.list)
  .get('/roles/:id', rolesController.get)
  .put('/roles/:id', rolesController.update)
  .delete('/roles/:id', rolesController.remove)
  .post('/roles', rolesController.create)

export default router;
