const path = require('path');

require('dotenv').config({path: path.join(__dirname, '..', '.env')});
const express = require('express');
const app = express();

const cors = require('cors');

const errorHandler = require('./errors/errorHandler');



module.exports = app;