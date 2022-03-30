const express = require('express');
const { postHandelar , AddpostHandelar, deletepostHandelar, addPostPage, updateVoteHandelar, CommentsHandelar, AddcommentHandelar, checkAuth, searchPostHandelar} = require('../controllers');

const postRoutes = express.Router();

postRoutes.get('/' , postHandelar);

postRoutes.post('/:id' , AddpostHandelar);

postRoutes.get('/:id/add', addPostPage);

postRoutes.delete('/delete/:id' , deletepostHandelar);

postRoutes.put('/vote/:id/:userid' , updateVoteHandelar);

postRoutes.get('/comments/:id' , CommentsHandelar);

postRoutes.post('/comments/:id/:userid' , AddcommentHandelar);

postRoutes.get('/:query' , searchPostHandelar);

module.exports = postRoutes