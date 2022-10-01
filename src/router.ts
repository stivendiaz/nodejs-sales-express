import { Request, Response, Router } from 'express';

import * as productsController from './controllers/productsController';
import * as rolesController from './controllers/rolesController';
import * as usersController from './controllers/usersController';
import * as salesController from './controllers/salesController';
import * as servicesController from './controllers/servicesController';
import { adminMiddleware as admin } from './middlewares/adminMiddleware';

const router = Router();

router
  .get('/', (req: Request, res: Response) => res.send('Hello World!'))
  .get('/products', productsController.list)
  .get('/products/:id', admin, productsController.get)
  .put('/products/:id', admin, productsController.update)
  .delete('/products/:id', admin, productsController.remove)
  .post('/products', admin , productsController.create)
  .get('/roles',admin, rolesController.list)
  .get('/roles/:id',admin, rolesController.get)
  .put('/roles/:id',admin, rolesController.update)
  .delete('/roles/:id',admin, rolesController.remove)
  .post('/roles',admin, rolesController.create)
  .get('/users',admin, usersController.list)
  .get('/users/:id',admin, usersController.get)
  .put('/users/:id',admin, usersController.update)
  .delete('/users/:id',admin, usersController.remove)
  .post('/users',admin, usersController.create)
  .get('/sales', salesController.list)
  .get('/sales/:id',admin, salesController.get)
  .put('/sales/:id',admin, salesController.update)
  .delete('/sales/:id',admin, salesController.remove)
  .post('/sales', salesController.create)
  .post('/services/total-by-day',admin, servicesController.calculateTotalByDate)
  .post('/services/balance-by-month',admin, servicesController.calculateBalanceByMonth)

export default router;
