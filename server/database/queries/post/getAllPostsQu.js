const connection = require('../../config/connection');

const getPostQu = () => {
    return connection.query({
        text:`select * from posts;`,
        values: [],
    });
};


module.exports = getPostQu