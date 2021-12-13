const express = require('express');
const router = require('./routes');

const api = express();

api.use(express.json());
api.use(router);

api.listen(3000, () => console.log('Server is running in PORT 3000'));