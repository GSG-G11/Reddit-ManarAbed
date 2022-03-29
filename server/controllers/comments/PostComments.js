const { getCommentsQu } = require('../../database/queries');

const CommentsHandelar = (req ,res) =>{
    getCommentsQu(req.params.id)
    .then((data) =>  res.json(data.rows))
    .catch((error) => res.status(500).json({error: "server error !"}));
}


module.exports = CommentsHandelar;