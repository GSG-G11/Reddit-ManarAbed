const connection = require('../../config/connection');

const getCommentsQu = (id) => {
    return connection.query({
        text:'select * from comments where post_id = $1;',
        values: [id],
    });
};


module.exports = getCommentsQu