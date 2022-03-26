const jwt = require('jsonwebtoken');

const createToken = ({email , id}) =>{
    return new Promise((resolve, reject) =>{
        jwt.sign({email , id} , process.env.JWT_SECRET , (err , token) => {
            if(err) reject(err);
            else{
                resolve(token);
            }
        });
    })
};
const createCookies = (res,token)=>{
    res.cookie('user_access' , token , {
        expires : new Date(Date.now() + 15 * 60 * 1000),
        httpOnly: true
    })
    res.status(200).redirect('/home')
}
//redirect('/')
// const VerfiyAuth = () =>{
//     return new Promise((resolve, reject) =>{
//         jwt.verify({email , id} , process.env.JWT_SECRET , (err , token) => {
//             if(err) reject(err);
//             else{
//                 resolve(token);
//             }
//         });
//     })
// };

module.exports = {
    createToken,
    createCookies
}
