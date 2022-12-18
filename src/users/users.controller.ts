import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error.class';
import { LoggerService } from '../logger/logger.service';

export class UserController extends BaseController {
  constructor(logger: LoggerService) {
    super(logger);
    this.bindRoutes([
      { path: '/login', method: 'post', func: this.login },
      { path: '/register', method: 'post', func: this.register },
    ]);
  }

  public login = (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    next(new HTTPError(401, 'Login error', 'login'));
  };
  
  public register = (
    _request: Request,
    response: Response,
    _next: NextFunction
  ) => {
    this.ok(response, 'register');
  };
}
