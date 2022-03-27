const express = require('express');
const { postHandelar , AddpostHandelar, deletepostHandelar, addPostPage} = require('../controllers');

const postRoutes = express.Router();

postRoutes.get('/' , postHandelar);

postRoutes.post('/:id' , AddpostHandelar);
postRoutes.get('/:id/add' , addPostPage);

postRoutes.delete('/:id' , deletepostHandelar);


module.exports = postRoutes