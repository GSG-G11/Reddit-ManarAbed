const { deletePostQu } = require('../../database/queries');

const deletepostHandelar = (req , res) =>{

    deletePostQu(req.params.id)
    .then((data) => {
        res.status(200).json({
            message: 'Are you sure?',
            DeletedPost : data.rows
        });
    }).catch((err) => res.json({ message: err }));
}

module.exports = deletepostHandelar 