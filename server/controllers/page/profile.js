const {join} = require('path')

const profilePage = (req , res) =>{
    res.sendFile(join(__dirname ,'..' , '..' , '..' , 'public' , 'html','Profile.html'));
}

module.exports = profilePage 