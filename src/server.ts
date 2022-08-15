import express, { Express } from 'express';
import baseRouter from './routes';

const app:Express = express();

// app.get('/', (request:Request, response:Response) => {
//    response.status(200).send("Hola Diamante automation")
// });

app.use('/api', baseRouter);

export default app;
