import 'dotenv/config';
import App from './App';
import IndexRouter from './routers/IndexRouter';

// init routers
const routers = [new IndexRouter()];

const app = new App(routers);

app.listen();
