const compression = require('compression');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();

app.use(compression({ threshold: 0 }));
app.use(cors());
app.use(helmet());

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

module.exports = app;
