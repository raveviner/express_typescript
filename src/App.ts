import express, { Application } from 'express';
import AbstractRouter from './routers/AbstractRouter';
import { logger, stream } from './utils/logger';
import errorMiddleware from './middlewares/errors';
import morgan from 'morgan';
import { Server } from 'http';

export default class App {
    public app: Application;
    public port: string | number;
    public env: string;

    constructor(routers: AbstractRouter[]) {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.env = process.env.NODE_ENV || 'production';

        this.initializeMiddlewares();
        this.initializeRoutes(routers);
        this.initializeErrorHandling();
    }

    public listen(): Server {
        return this.app.listen(this.port, () => {
            logger.info(`🚀 App listening on port ${this.port}`);
        });
    }

    private initializeRoutes(routers: AbstractRouter[]) {
        routers.forEach((router) => {
            this.app.use('/', router.router);
        });
    }

    private initializeMiddlewares() {
        // 'tiny' is a log format type
        this.app.use(morgan('tiny', { stream }));

        // parsing incoming body data
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
      }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
      }

}
