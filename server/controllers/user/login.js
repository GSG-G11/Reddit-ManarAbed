const loginValidate = require('../../utils/validation/loginSchema');
const { compare } = require('bcrypt');
const { addUserQu, checkUserQuery } = require('../../database/queries');
const { createToken , createCookies } = require('../../utils/jwt/jwtAuth')
const createError = require('../../errors/customError')

const login = (req, res, next) => {
    let id;
    const {email, password} = req.body; 
    loginValidate(req.body)
    .then(() => checkUserQuery(email))
    .then(data => {
        if(data.rowCount === 1) {
            id = data.rows[0].id
            return compare(password, data.rows[0].password)
        }else{
            res.status(404).json({ message: 'This email hasn\'t registered yet' });
        }
    })
    .then((isMatch) =>{
        if(!isMatch){
            res.status(404).json({ message: 'Wrong Password' });
        }
    })
    .then(() => createToken({id, email}))
    .then(token => createCookies(res,token))
    .catch(err => {
        if(err.name === 'ValidationError'){
            res.json({ message: err })
        }else{
            next(err)
        }
    })
}
module.exports = login