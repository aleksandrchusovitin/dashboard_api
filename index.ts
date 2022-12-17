import express, { Request, Response, NextFunction } from 'express';
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

app.use((_request, _response, next) => {
  console.log('Time ', Date.now());
  next();
});

app.get('/hello', (_request, _response) => {
  throw new Error('Custom ERROR!!!');
});

app.use('/users', userRouter);

app.use(
  (
    error: Error,
    _request: Request,
    response: Response,
    _next: NextFunction
  ) => {
    console.log(error.message);
    response.status(500).send(error.message);
  }
);

app.listen(port, () => {
  console.log(`Server started: http://localhost:${port}`);
});
