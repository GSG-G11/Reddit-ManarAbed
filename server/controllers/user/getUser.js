const { getUserByIdQu } = require('../../database/queries')
const createError = require('../../errors/customError')

const getUserHandel = (req , res , next) => {
    getUserByIdQu(req.params.id)
    .then((data) =>  res.status(200).json(data.rows))
    .catch((err) => res.status(500).json(err.message))
}
module.exports = getUserHandel