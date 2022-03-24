const express = require('express');
const { signup,login,signupPage,loginPage,logout } = require('../controllers');

const userRoutes = express.Router();

userRoutes.get('/signup' , signupPage);
userRoutes.post('/signup' , signup); 

userRoutes.get('/login' , loginPage);
userRoutes.post('/login' , login); 

userRoutes.get('/logout' , logout);

module.exports = userRoutes