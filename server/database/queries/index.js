const addUserQu = require('./user/addUserQuery');
const checkUserQuery = require('./user/checkUser');
const getUserByIDQuery = require('./user/getUserByID')
const getPostQu = require('./post/getAllPostsQu')
module.exports = {
    addUserQu,
    checkUserQuery,
    getUserByIDQuery,
    getPostQu
}