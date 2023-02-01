import Express from 'express';
import api from './src/api';
import * as dotenv from 'dotenv';
dotenv.config();
const app = Express();

app.use(Express.json());
app.use('/api/v1', api);
app.get('/', (req, res) => {
  return res.status(200).json('Hello World');
});

export default app;
