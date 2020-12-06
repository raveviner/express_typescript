import App from '../src/App';
import IndexRouter from '../src/routers/IndexRouter';

export default class TestUtils {
    
    static async createServer() {
        const routers = [new IndexRouter()];
        const app = new App(routers);
        const server = app.listen();
        return server;
    }
}
