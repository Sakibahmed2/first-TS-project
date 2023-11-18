import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRouter } from './app/modules/student/student.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1/students', StudentRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello worlddd');
});

export default app;
