const connection = require('../../config/connection');

const getUserByIDQu = (id) => connection.query({
  text: `select u.id , u.name , u.email , p.title , p.id as postId, p.content , p.img_url 
  from users as u
  left join posts as p on u.id = p.userId
  where u.id= $1;`,
  values: [id],
});

module.exports = getUserByIDQu;