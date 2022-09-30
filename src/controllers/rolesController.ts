import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import { Id } from 'objection';
import Role from '../models/Role';

export const list = async (_: Request, res: Response): Promise<Response> => {
  const roles = await Role.query();
  return res.status(HttpStatus.OK).json(roles);
};

export const get = async (req: Request, res: Response): Promise<Response> => {
  const id: Id = req.params.id;
  const role = await Role.query().findById(id);

  if (!role) {
    return res.sendStatus(HttpStatus.NOT_FOUND);
  }

  return res.status(HttpStatus.OK).json(role);
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: Id = req.params.id;
  const role = await Role.query().findById(id);

  if (role) {
    return res.sendStatus(HttpStatus.OK);
  }
  return res.sendStatus(HttpStatus.NOT_FOUND);
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: Id = req.params.id;

  const { name } = req.body;
  const role = await Role.query().findById(id);

  if (role) {
    const newRole = await role.$query().updateAndFetch({ name });
    return res.status(HttpStatus.OK).json(newRole);
  }
  return res.status(HttpStatus.NOT_FOUND).json(role);
};

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name } = req.body;
  const role = await Role.query().insert({ name });

  return res.status(HttpStatus.CREATED).json(role);
};
