const addUserQu = require('./user/addUserQuery');
const checkUserQuery = require('./user/checkUser');
const getUserByIdQu = require('./user/getUserById')
const getPostQu = require('./post/getAllPostsQu');
const addPostQu = require('./post/addPostQu')
const deletePostQu = require('./post/deletePostQu');
const updateVotesQu = require('./post/updatePostVotesQu');
const getSearchPostQu = require('./post/searchPostQu');

const getCommentsQu = require('./comments/getComments');
const addcommentQu = require('./comments/addComment');

module.exports = {
    addUserQu,
    checkUserQuery,
    getUserByIdQu,
    getPostQu,
    addPostQu,
    deletePostQu,
    updateVotesQu,
    getCommentsQu,
    addcommentQu,
    getSearchPostQu
}