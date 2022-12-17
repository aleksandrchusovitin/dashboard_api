import express from 'express';

export const userRouter = express.Router();

userRouter.use((_request, _response, next) => {
  console.log('Users handler');
  next();
});

userRouter.post('/login', (_request, response) => {
  response.send('login');
});

userRouter.post('/register', (_request, response) => {
  response.send('register');
});