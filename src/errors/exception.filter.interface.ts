import { Request, Response, NextFunction } from 'express';
import { HTTPError } from './http-error.class';

export interface IExeptionFilter {
  catch: (
    error: Error | HTTPError,
    request: Request,
    response: Response,
    next: NextFunction
  ) => void;
}
