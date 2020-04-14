const express = require('express');
const server = express();
const connectDB = require('./config/db');

connectDB();

server.use(express.json());

server.use('/api/user', require('./routes/user'));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));