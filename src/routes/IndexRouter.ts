
import { Router, NextFunction, Request, Response } from 'express';
import IRouter from './IRouter';

class IndexRouter implements IRouter {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private index(req: Request, res: Response, next: NextFunction) {
    res.status(200).send({message: 'Hello World'});
  };

  private initializeRoutes() {
    this.router.get(`/api/v1/`, this.index);
  }
}

export default IndexRouter;
