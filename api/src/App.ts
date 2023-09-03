import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routeTodo from './routes/todo';

const app = express();

const port = 3000;

app.use(cors());
app.use(bodyParser.json())
app.use('/todo', routeTodo);

app.get('/', (req: any, res: any) => {
  res.send({'status': true})
})

app.listen(port, () => {
  console.log(`Listen on http://localhost:${port}`)
})
