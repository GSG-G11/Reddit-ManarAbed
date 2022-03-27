const connection = require('../../config/connection');

const deletePostQu = (id) => {
    return connection.query({
        text:'DELETE FROM posts where id = $1',
        values: [id],
    });
};


module.exports = deletePostQu