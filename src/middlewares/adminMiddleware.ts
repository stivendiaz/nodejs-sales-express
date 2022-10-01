import { Request, Response, NextFunction } from 'express';
import HttpStatus from 'http-status-codes';

import User from '../models/User';

export async function adminMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { auth: userId } = req.headers;
  try {
    const role = await User.query()
      .findById(userId!)
      .join('roles', 'users.rolesId', 'roles.id')
      .select('roles.name');

    if (role) {
      if (role.name === 'Admin') {
        return next();
      }
      return res.sendStatus(HttpStatus.FORBIDDEN);
    }
    return res.sendStatus(HttpStatus.UNAUTHORIZED);
  } catch (error) {
    return res.sendStatus(HttpStatus.UNAUTHORIZED);
  }
}
