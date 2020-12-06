import { NextFunction, Request, Response, Router } from 'express';

export default abstract class AbstractRouter {
    public router: Router;

    constructor(){
        this.router = Router()
    }

    protected wrapErrors(fn: Function) {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                await fn(req, res, next);
            } catch (error) {
                next(error);
            }
        }
    }
}

