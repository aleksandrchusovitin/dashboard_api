import { Request, Response, NextFunction } from 'express';
import { LoggerService } from '../logger/logger.service';
import { IExeptionFilter } from './exception.filter.interface';
import { HTTPError } from './http-error.class';

export class ExeptionFilter implements IExeptionFilter {
  logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
  }

  public catch = (
    error: Error | HTTPError,
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    if (error instanceof HTTPError) {
      this.logger.error(
        `[${error.context}] Error: ${error.statusCode} : ${error.message}`
      );
      response.status(error.statusCode).send({ error: error.message });
    } else {
      this.logger.error(`${error.message}`);
      response.status(500).send({ error: error.message });
    }
  };
}
