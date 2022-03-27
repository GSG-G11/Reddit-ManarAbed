const {join} = require('path')

const addPostPage = (req , res) =>{
    res.sendFile(join(__dirname ,'..' , '..' , '..' , 'public' , 'html','addPost.html'));
}

module.exports = addPostPage 