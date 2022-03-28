

const connection = require('../../config/connection');

const updateVotesQu = (votes_num, id, userid) => {
    return connection.query({
        text:`
            UPDATE posts
            SET votes_num = $1
            WHERE id = $2 and userid = $3 returning *;
        `,
        values: [votes_num, id, userid]
    });
};

module.exports = updateVotesQu