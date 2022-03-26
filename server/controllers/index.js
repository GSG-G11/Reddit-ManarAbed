const signup = require('./user/signup');
const login = require('./user/login');
const loginPage = require('./page/login');
const signupPage = require('./page/signup');
const profilePage = require('./page/profile');
const logout = require('./user/logout');
const getUser = require('./user/getUser');

const postHandelar = require('./post/allPosts');
const getDecoded = require('./user/getDecoded');

module.exports = {
    signup,
    login,
    loginPage,
    signupPage,
    logout,
    getDecoded,
    getUser,
    profilePage,
    postHandelar
}