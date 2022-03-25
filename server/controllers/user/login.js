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
           next(createError(`This is not Your Email` , 404))
        }
    })
    .then((isMatch) =>{
        if(!isMatch){
            next(createError(`Wrong Password` , 404))
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