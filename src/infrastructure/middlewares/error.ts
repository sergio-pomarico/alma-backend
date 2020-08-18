import HttpStatus from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import HttpException from './HttpException';

const NotFoundMiddlewares = (
  req: Request,
  res: Response,
  next: NextFunction
): Response =>
  res.status(HttpStatus.NOT_FOUND).send({
    status: HttpStatus.NOT_FOUND,
    message: 'Resource not found'
  });

const ErrorMiddlewares = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  const status = err.status || HttpStatus.INTERNAL_SERVER_ERROR;
  const message = err.name || 'Internal server error';
  return res.status(status).send({
    status,
    message
  });
};

export { NotFoundMiddlewares, ErrorMiddlewares };
