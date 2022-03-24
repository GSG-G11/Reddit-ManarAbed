const connection = require('../../config/connection');

const addUserQu = (name , email, password) =>{
    return connection.query({
        text: 'insert into users (name,email,password) values ($1, $2, $3) returning *;',
        values: [name , email, password]
    })
}


module.exports = addUserQu;