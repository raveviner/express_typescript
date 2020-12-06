import { Router, NextFunction, Request, Response } from 'express';
import AbstractRouter from './AbstractRouter';

export default class IndexRouter extends AbstractRouter {
    public router = Router();

    constructor() {
        super();
        this.initializeRoutes();
    }

    /**
     * @api {GET} /api/v1
     * 
     * Test API
     * 
     */
    private index(req: Request, res: Response, next: NextFunction) {
        res.status(200).send('Success');
    }

    private initializeRoutes() {
        this.router.get(`/api/v1/`, this.wrapErrors(this.index.bind(this)));
    }
}
