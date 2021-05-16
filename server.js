'use strict';

const express = require('express');
const errorHandler = require('./error-handlers/500.js');
const notFoundHandler = require('./error-handlers/404.js');
const server = express();

function startServer(PORT) {
  server.listen(PORT, () => {
    console.log(`Up TO PORT ${PORT}`);
  });
}

server.get('/', (req, res) => {
  res.send('Welcome To The Server ^_^');
});

server.get('/bad', (req, res) => {
  throw new Error('Sorry, Something Went Wrong X_X');
});

server.use('*', notFoundHandler);
server.use(errorHandler);

module.exports = {
  server: server,
  startServer: startServer,
};