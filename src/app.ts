import dotenv from 'dotenv-safe';
import express, { Application, Request, Response, json, urlencoded } from 'express';

dotenv.config();
const app: Application = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello TS');
});

app.listen(process.env.PORT, () => {
  console.log(`Server Express with Typescript is running on port ${process.env.PORT}`);
});
