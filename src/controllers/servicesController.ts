import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import { Id, raw } from 'objection';
import Sale from '../models/Sale';

export const calculateTotalByDate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { date } = req.body;
  const total = await Sale.query()
    .where('saleAt', date)
    .select(
      raw(
        'SUM(qty*(SELECT price from products where id = product_id)) as total'
      )
    )
    .first();

  if (!total) {
    return res.sendStatus(HttpStatus.NOT_FOUND);
  }

  return res.status(HttpStatus.OK).json(total);
};

export const calculateBalanceByMonth = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { month, year } = req.body;
  const sale = await Sale.query()
    .andWhereRaw(`EXTRACT(MONTH FROM sale_at::date) = ?`, [month])
    .andWhereRaw(`EXTRACT(YEAR FROM sale_at::date) = ?`, [year])
    .select(
      raw(
        'SUM(qty*(SELECT price from products where id = product_id)) as total'
      )
    )
    .first();
  if (!sale) {
    return res.sendStatus(HttpStatus.NOT_FOUND);
  }

  return res.status(HttpStatus.OK).json(sale);
};
