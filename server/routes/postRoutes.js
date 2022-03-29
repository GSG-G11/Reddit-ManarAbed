const express = require('express');
const { postHandelar , AddpostHandelar, deletepostHandelar, addPostPage, updateVoteHandelar, CommentsHandelar} = require('../controllers');

const postRoutes = express.Router();

postRoutes.get('/' , postHandelar);

postRoutes.post('/:id' , AddpostHandelar);
postRoutes.get('/:id/add' , addPostPage);

postRoutes.delete('/delete/:id' , deletepostHandelar);

postRoutes.put('/vote/:id/:userid' , updateVoteHandelar);

postRoutes.get('/comments/:id' , CommentsHandelar);

module.exports = postRoutes