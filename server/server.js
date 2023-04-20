import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './utils/dbConnect.js';
import mongoose from 'mongoose';
import 'express-async-errors';
// import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
app.use(express.json());
// app.use(cors());

import courseRoute from './view/courseRoute.js';
import authRoute from './view/authRoute.js';

dbConnect();

app.get('/', function (req, res) {
  res.send('Server up and running');
});

app.use('/api/v1/courses', courseRoute);
app.use('/api/v1/auth', authRoute);

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

mongoose.connection.once('open', () => {
  console.log('Connect to db!');
  app.listen(process.env.PORT, function () {
    console.log(`Server Started on port: ${process.env.PORT}`);
  });
});
