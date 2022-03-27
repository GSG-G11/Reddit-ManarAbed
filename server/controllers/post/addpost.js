const { addPostQu } = require('../../database/queries');

const AddpostHandelar = (req , res) =>{

    const userId = req.params.id 
    const {title , content, img_url} = req.body;

    addPostQu(title, content, img_url, userId )
    .then((data) => {
        res.status(201).json({
            message: 'post added successflly !',
            post: data.rows[0]
        });
    }).catch(() => res.json({ message: "oops! try Again!" }));
}

module.exports = AddpostHandelar 