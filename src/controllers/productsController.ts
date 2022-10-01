import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import { Id } from 'objection';
import Product from '../models/Product';

export const list = async (_: Request, res: Response): Promise<Response> => {
  const products = await Product.query();
  return res.status(HttpStatus.OK).json(products);
};

export const get = async (req: Request, res: Response): Promise<Response> => {
  const id: Id = req.params.id;
  const product = await Product.query().findById(id);

  if (!product) {
    return res.sendStatus(HttpStatus.NOT_FOUND);
  }

  return res.status(HttpStatus.OK).json(product);
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: Id = req.params.id;
  const product = await Product.query().findById(id);

  if (product) {
    return res.sendStatus(HttpStatus.OK);
  }
  return res.sendStatus(HttpStatus.NOT_FOUND);
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: Id = req.params.id;

  const { description, name, price } = req.body;

  const product = await Product.query().findById(id);

  if (product) {
    const newproduct = await product
      .$query()
      .updateAndFetch({ description, name, price });
    return res.status(HttpStatus.OK).json(newproduct);
  }
  return res.status(HttpStatus.NOT_FOUND).json(product);
};

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { description, name, price } = req.body;
  const product = await Product.query().insert({ description, name, price });

  return res.status(HttpStatus.CREATED).json(product);
};
