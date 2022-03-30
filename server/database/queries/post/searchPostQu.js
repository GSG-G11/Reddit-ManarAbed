const connection = require('../../config/connection');

const getSearchPostQu = (query) => {
    return connection.query({
        text:`select p.userId, p.title , p.content ,p.id ,p.img_url,p.votes_num from posts as p
        where LOWER(p.title) LIKE $1 or LOWER(p.content) like $1
        order by votes_num desc;`, 
        values: [query]
    });
};


module.exports = getSearchPostQu