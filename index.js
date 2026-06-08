import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import path from 'node:path';

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve( 'index.html')));

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});