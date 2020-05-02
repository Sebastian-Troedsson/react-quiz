const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

server.use('/api/questions', require('./routes').questionsRouter);

module.exports = server;
