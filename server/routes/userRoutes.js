const express = require('express');
const { signup, login, signupPage, loginPage, logout, getDecoded, getUserHandel, profilePage } = require('../controllers');

const userRoutes = express.Router();

userRoutes.get('/signup' , signupPage);

userRoutes.post('/signup' , signup); 

userRoutes.get('/login' , loginPage);

userRoutes.post('/login' , login); 

userRoutes.get('/logout' , logout);

userRoutes.get('/home' , (req,res) =>{
    res.status(200).json({massage : 'home Page'})
})

userRoutes.get('/cookie' , getDecoded)

userRoutes.get('/:id/profile' , profilePage)

userRoutes.get('/:id' , getUserHandel)

module.exports = userRoutes