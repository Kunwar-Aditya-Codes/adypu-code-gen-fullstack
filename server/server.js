import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './utils/dbConnect.js';
import mongoose from 'mongoose';
import 'express-async-errors';

dotenv.config();

const app = express();
app.use(express.json());

import courseRoute from './view/courseRoute.js';
import authRoute from './view/authRoute.js';

dbConnect();

app.get('/', function (req, res) {
  res.send('Server up and running');
});

app.use('/api/v1/courses', courseRoute);
app.use('/api/v1/auth', authRoute);

mongoose.connection.once('open', () => {
  console.log('Connect to db!');
  app.listen(process.env.PORT, function () {
    console.log(`Server Started on port: ${process.env.PORT}`);
  });
});
