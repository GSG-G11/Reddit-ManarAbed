const connection = require('../../config/connection');

const deletePostQu = (id) => {
    return connection.query({
        text:'delete from posts where id = $1 returning *;',
        values: [id],
    });
};


module.exports = deletePostQu