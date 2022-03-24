const connection = require('../../config/connection');

const checkUserQuery = (email) => connection.query({
  text: 'SELECT * FROM users WHERE email = ($1);',
  values: [email],
});

module.exports = checkUserQuery;