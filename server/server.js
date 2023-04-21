require('dotenv').config();
require('express-async-errors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
// const cors = require('cors');

const courseRoute = require('./view/courseRoute');
const authRoute = require('./view/authRoute');
const dbConnect = require('./utils/dbConnect');

const app = express();
app.use(express.json());
// app.use(cors());

dbConnect();

app.use('/api/v1/courses', courseRoute);
app.use('/api/v1/auth', authRoute);

__dirname = path.resolve();
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
