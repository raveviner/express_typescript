import 'dotenv/config';
import App from './App';
import IndexRouter from './routes/IndexRouter';

const routes = [new IndexRouter()];

const app = new App(routes);

app.listen();
