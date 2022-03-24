const {join} = require('path')

const signupPage = (req , res) =>{
    res.sendFile(join(__dirname ,'..' , '..' , '..' , 'public' , 'html','signup.html'));
}

module.exports = signupPage 