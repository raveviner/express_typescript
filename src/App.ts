import express, { Application } from 'express';
import IRouter from './routes/IRouter';
import { logger, stream } from './utils/logger';
import errorMiddleware from './middlewares/errors';
import morgan from 'morgan';

export default class App {
    public app: Application;
    public port: string | number;
    public env: string;

    constructor(routes: IRouter[]) {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.env = process.env.NODE_ENV || 'production';

        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeErrorHandling();
    }

    public listen() {
        this.app.listen(this.port, () => {
            logger.info(`🚀 App listening on the port ${this.port}`);
        });
    }

    private initializeRoutes(routes: IRouter[]) {
        routes.forEach((route) => {
            this.app.use('/', route.router);
        });
    }

    private initializeMiddlewares() {
        this.app.use(morgan('tiny', { stream }));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
      }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
      }

}
