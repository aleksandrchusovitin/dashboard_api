import express, { Express } from 'express';
import { Server } from 'http';
import { ExeptionFilter } from './errors/exepction.filter.js';
import { LoggerService } from './logger/logger.service.js';
import { UserController } from './users/users.controller.js';

export class App {
  private app: Express;
  private port: number;
  private server: Server;
  private logger: LoggerService;
  private userController: UserController;
  private exeptionFilter: ExeptionFilter;

  constructor(
    logger: LoggerService,
    userController: UserController,
    exeptionFilter: ExeptionFilter
  ) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
    this.userController = userController;
    this.exeptionFilter = exeptionFilter;
  }

  public useRoutes = () => {
    this.app.use('/users', this.userController.router);
  };

  public useExeptionFilters = () => {
    this.app.use(this.exeptionFilter.catch);
  };

  public init = async () => {
    this.useRoutes();
    this.useExeptionFilters();
    this.server = this.app.listen(this.port);
    this.logger.log(`Server started: http://localhost:${this.port}`);
  };
}
