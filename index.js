'use strict';

const server = require('./server.js');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

server.startServer(PORT);

