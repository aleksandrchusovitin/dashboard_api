import { Logger } from 'tslog';

export class LoggerService {
  private logger: Logger<Array<unknown>>;

  constructor() {
    this.logger = new Logger();
  }

  public log = (...args: Array<unknown>) => {
    this.logger.info(...args);
  };

  public error = (...args: Array<unknown>) => {
    this.logger.error(...args);
  };

  public warn = (...args: Array<unknown>) => {
    this.logger.warn(...args);
  };
}
