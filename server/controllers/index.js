const signup = require('./user/signup');
const login = require('./user/login');
const loginPage = require('./page/login');
const signupPage = require('./page/signup');
const logout = require('./user/logout');

module.exports = {
    signup,
    login,
    loginPage,
    signupPage,
    logout
}