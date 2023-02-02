import Express from 'express';
import api from './src/api';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
const app = Express();

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
    allowedHeaders: ['Authorization', 'content-type', 'authorization'],
    exposedHeaders: ['Authorization', 'content-type', 'authorization'],
  })
);

app.use(Express.json());
app.use('/api/v1', api);
app.get('/', (req, res) => {
  return res.status(200).json('Hello World');
});

export default app;
