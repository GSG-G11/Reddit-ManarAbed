const { getPostQu } = require('../../database/queries');

const postHandelar = (req , res) =>{
    getPostQu()
    .then((data) => res.status(200).json(data))
    .catch(error => res.status(500).json({massage: error}));
}

module.exports = postHandelar