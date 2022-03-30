const { getSearchPostQu } = require('../../database/queries');

const searchPostHandelar = (req , res) =>{
    const query = req.params.query
    getSearchPostQu(`%${query.toLowerCase()}%`)
    .then((data) => res.status(200).json(data.rows))
    .catch(error => res.status(500).json({massage: error}));
}

module.exports = searchPostHandelar