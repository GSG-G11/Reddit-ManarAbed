const express = require('express');
const { postHandelar , AddpostHandelar, deletepostHandelar, addPostPage, updateVoteHandelar} = require('../controllers');

const postRoutes = express.Router();

postRoutes.get('/' , postHandelar);

postRoutes.post('/:id' , AddpostHandelar);
postRoutes.get('/:id/add' , addPostPage);

postRoutes.delete('/delete/:id' , deletepostHandelar);

postRoutes.put('/vote/:id/:userid' , updateVoteHandelar);


module.exports = postRoutes