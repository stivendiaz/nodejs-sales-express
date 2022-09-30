import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import { Id } from 'objection';
import User from '../models/User';

export const list = async (_: Request, res: Response): Promise<Response> => {
  const users = await User.query();
  return res.status(HttpStatus.OK).json(users);
};

export const get = async (req: Request, res: Response): Promise<Response> => {
  const id: Id = req.params.id;
  const user = await User.query().findById(id);

  if (!user) {
    return res.sendStatus(HttpStatus.NOT_FOUND);
  }

  return res.status(HttpStatus.OK).json(user);
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: Id = req.params.id;
  const user = await User.query().findById(id);

  if (user) {
    return res.sendStatus(HttpStatus.OK);
  }
  return res.sendStatus(HttpStatus.NOT_FOUND);
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: Id = req.params.id;

  const { document, lastName, name, rolesId } = req.body;

  const user = await User.query().findById(id);

  if (user) {
    const newUser = await user.$query().updateAndFetch({ document, lastName, name, rolesId });
    return res.status(HttpStatus.OK).json(newUser);
  }
  return res.status(HttpStatus.NOT_FOUND).json(user);
};

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { document, lastName, name, rolesId } = req.body;
  const user = await User.query().insert({ document, lastName, name, rolesId });

  return res.status(HttpStatus.CREATED).json(user);
};
