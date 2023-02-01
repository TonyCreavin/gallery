import * as dotenv from 'dotenv';
dotenv.config();
import Express from 'express';
const app = Express();

app.use(Express.json());

app.get('/', (req, res) => {
  return res.status(200).json('Hello World');
});

export default app;
