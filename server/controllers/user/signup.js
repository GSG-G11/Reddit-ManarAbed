const singupValidate = require('../../utils/validation/signupSchema');
const hashPassword = require('../../utils/password/hashpassword');
const { addUserQu,checkUserQuery } = require('../../database/queries');
const { createToken , createCookies } = require('../../utils/jwt/jwtAuth')
const createError = require('../../errors/customError')

const signup = (req, res, next) => {
    const {name, email, password} = req.body; 
    singupValidate(req.body)
    .then(() => checkUserQuery(email))
    .then(data => {
        if(data.rowCount === 0) {
           return hashPassword(password)
        }else{
            next(createError(`this email is exists!` , 500))
        }
    })
    .then(hashPassword => addUserQu(name, email, hashPassword))
    .then(data => createToken({id: data.rows[0].id , email: data.rows[0].email}))
    .then(token => createCookies(res,token))
    .catch(err => {
        if(err.name === 'ValidationError'){
            res.status(403).json({ message: err })
        }else{
            next(err)
        }
    })
}
module.exports = signup