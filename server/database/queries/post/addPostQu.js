const connection = require('../../config/connection');

const addPostQu = (title, content, img_url,userId) => {
    return connection.query({
        text:'insert into posts (title,content,img_url,userId) values ($1, $2 , $3, $4) returning *',
        values: [title, content, img_url,userId]
    });
};

module.exports = addPostQu