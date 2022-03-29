const connection = require('../../config/connection');

const addcommentQu = (content, post_id, user_id) => {
    return connection.query({
        text:'insert into comments (content, post_id, user_id) values ($1, $2 , $3) returning *',
        values: [content, post_id, user_id]
    });
};

module.exports = addcommentQu