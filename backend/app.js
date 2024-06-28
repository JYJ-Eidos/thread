const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const { AppDataSource } = require('./src/models/data-source');
const { routes } = require('./src/routes');

const app = express();
app.use(express.json());
app.use(cors({ exposedHeaders: ['Authorization'] }));
app.use(morgan('combined'));
app.use(routes);

// server health checker
app.get('/ping', (_, res) => {
  res.status(200).json({ message: 'pong' });
});

const start = () => {
  try {
    AppDataSource.initialize()
      .then(() => {
        console.log('data source has been initialize');
      })
      .catch((err) => {
        console.error(err);
      });
    app.listen(process.env.PORT, () => {
      console.log(`server is listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error('server error', err);
  }
};

start();
