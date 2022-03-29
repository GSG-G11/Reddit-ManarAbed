const addUserQu = require('./user/addUserQuery');
const checkUserQuery = require('./user/checkUser');
const getUserByIDQu = require('./user/getUserByID')
const getPostQu = require('./post/getAllPostsQu');
const addPostQu = require('./post/addPostQu')
const deletePostQu = require('./post/deletePostQu');
const updateVotesQu = require('./post/updatePostVotesQu');
const getCommentsQu = require('./comments/getComments');
const addcommentQu = require('./comments/addComment');

module.exports = {
    addUserQu,
    checkUserQuery,
    getUserByIDQu,
    getPostQu,
    addPostQu,
    deletePostQu,
    updateVotesQu,
    getCommentsQu,
    addcommentQu
}