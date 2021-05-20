import express, { Express } from 'express';
import routes from './routes';

class Application {
  express: Express

  constructor() {
    this.express = express();
    this.routes();
    this.middlewares();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

const app = new Application().express;

export { app };
