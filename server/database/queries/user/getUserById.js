const connection = require('../../config/connection');

const getUserByIDQuery = (id) => connection.query({
  text: `select * from users where id= $1;`,
  values: [id],
});

module.exports = getUserByIDQuery;
// select u.name, u.id, p.id as postId , p.title, p.content
//   from posts as p
//   join users as u on u.id = p.userId
//   where u.id = $1;