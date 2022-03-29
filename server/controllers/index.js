const signup = require('./user/signup');
const login = require('./user/login');
const loginPage = require('./page/login');
const signupPage = require('./page/signup');
const profilePage = require('./page/profile');
const addPostPage = require('./page/addPost');
const logout = require('./user/logout');
const getUserHandel = require('./user/getUser');

const postHandelar= require('./post/allPosts');
const AddpostHandelar = require('./post/addpost');
const deletepostHandelar = require('./post/deletePost');
const getDecoded = require('./user/getDecoded');
const updateVoteHandelar = require('./post/updatevotes');
const CommentsHandelar = require('./comments/PostComments');
const AddcommentHandelar = require('./comments/addComment');
const checkAuth = require('./authController');

module.exports = {
    signup,
    login,
    loginPage,
    signupPage,
    addPostPage,
    logout,
    getDecoded,
    getUserHandel,
    profilePage,
    postHandelar,
    AddpostHandelar,
    deletepostHandelar,
    updateVoteHandelar,
    CommentsHandelar,
    AddcommentHandelar,
    checkAuth
}