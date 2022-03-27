const connection = require('../../config/connection');

const getPostQu = () => {
    return connection.query({
        text:`select u.name , p.title , p.content ,p.id ,p.img_url from posts as p
        join users as u on u.id = p.userId ;`
    });
};


module.exports = getPostQu