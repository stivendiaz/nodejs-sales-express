import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import { Id } from 'objection';
import Sale from '../models/Sale';

export const list = async (_: Request, res: Response): Promise<Response> => {
  const sales = await Sale.query();
  return res.status(HttpStatus.OK).json(sales);
};

export const get = async (req: Request, res: Response): Promise<Response> => {
  const id: Id = req.params.id;
  const sale = await Sale.query().findById(id);

  if (!sale) {
    return res.sendStatus(HttpStatus.NOT_FOUND);
  }

  return res.status(HttpStatus.OK).json(sale);
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: Id = req.params.id;
  const sale = await Sale.query().findById(id);

  if (sale) {
    return res.sendStatus(HttpStatus.OK);
  }
  return res.sendStatus(HttpStatus.NOT_FOUND);
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: Id = req.params.id;

  const { productId, qty, usersId } = req.body;

  const sale = await Sale.query().findById(id);

  if (sale) {
    const newsale = await sale
      .$query()
      .updateAndFetch({ productId, qty, usersId });
    return res.status(HttpStatus.OK).json(newsale);
  }
  return res.status(HttpStatus.NOT_FOUND).json(sale);
};

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { productId, qty, usersId } = req.body;
  const sale = await Sale.query().insert({
    productId,
    qty,
    usersId,
    saleAt: new Date(),
  });

  return res.status(HttpStatus.CREATED).json(sale);
};
