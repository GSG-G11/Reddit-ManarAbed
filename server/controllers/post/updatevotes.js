const { updateVotesQu } = require('../../database/queries');

const updateVoteHandelar = (req , res) =>{

    const { userid,id } = req.params
    const { votes_num } = req.body;

    updateVotesQu(votes_num, id, userid)
    .then((data) => {
        res.status(201).json({
            message: 'Your vote is added successflly !',
            post: data.rows
        });
    }).catch((err) => res.json({ message: "oops! try Again!" , error: err }));
}

module.exports = updateVoteHandelar 