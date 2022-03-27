const { deletePostQu } = require('../../database/queries');

const deletepostHandelar = (req , res) =>{

    deletePostQu(req.params.id)
    .then(() => {
        res.status(200).json({
            message: 'Are you sure?'
        });
    }).catch(() => res.json({ message: "error" }));
}

module.exports = deletepostHandelar 