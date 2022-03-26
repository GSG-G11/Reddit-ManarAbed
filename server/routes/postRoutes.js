const express = require('express');
const { postHandelar} = require('../controllers');

const postRoutes = express.Router();

postRoutes.get('/' , postHandelar);


module.exports = postRoutes