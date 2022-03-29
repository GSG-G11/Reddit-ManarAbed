const { addcommentQu } = require('../../database/queries');

const AddcommentHandelar = (req , res) =>{

    const {postId,userId} = req.params.id 
    const {content} = req.body;

    addcommentQu(content, postId, userId)
    .then((data) => {
        res.status(201).json({
            message: 'comment added successflly !',
            post: data.rows[0]
        });
    }).catch(() => res.json({ message: "oops! try Again!" }));
}

module.exports = AddcommentHandelar 