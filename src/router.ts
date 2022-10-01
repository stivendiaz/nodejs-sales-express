import { Request, Response, Router } from 'express';

import * as productsController from './controllers/productsController';
import * as rolesController from './controllers/rolesController';
import * as usersController from './controllers/usersController';
import * as salesController from './controllers/salesController';
import * as servicesController from './controllers/servicesController';

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
  .get('/users', usersController.list)
  .get('/users/:id', usersController.get)
  .put('/users/:id', usersController.update)
  .delete('/users/:id', usersController.remove)
  .post('/users', usersController.create)
  .get('/sales', salesController.list)
  .get('/sales/:id', salesController.get)
  .put('/sales/:id', salesController.update)
  .delete('/sales/:id', salesController.remove)
  .post('/sales', salesController.create)
  .post('/services/total-by-day', servicesController.calculateTotalByDate)
  .post('/services/balance-by-month', servicesController.calculateBalanceByMonth)

export default router;
