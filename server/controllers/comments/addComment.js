const { addcommentQu } = require('../../database/queries');

const AddcommentHandelar = (req , res) =>{

    const { id, userid } = req.params
    const { content } = req.body;

    addcommentQu(content, id, userid)
    .then((data) => {
        res.status(201).json({
            message: 'comment added successflly !',
            data: data.rows[0]
        });
    }).catch(() => res.json({ message: "oops! try Again!" }));
}

module.exports = AddcommentHandelar 