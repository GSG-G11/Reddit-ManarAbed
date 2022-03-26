const { getUserByIDQuery } = require('../../database/queries')
const createError = require('../../errors/customError')

const getUser = (req , res , next) => {
    getUserByIDQuery(req.params.id)
    .then((data) =>  res.status(200).json(data.rows[0]))
    .catch((err) => res.json(err.message))
}
module.exports = getUser