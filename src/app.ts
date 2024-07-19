import express, { Express } from 'express';
import config from './config/config';
import logger from './middleware/logger';
import routes from './routes';

const app: Express = express();

app.use(logger);

app.use(routes);

app.listen(config.PORT, () => {
    console.log(`Server listening on port ${config.PORT}`);
});

