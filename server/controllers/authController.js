const { VerfiyAuth } = require('../utils/jwt/jwtAuth')

function checkAuth(req, res, next) {
    const token = req.cookies.access_token;
    if (!token) res.json({ message: 'unauthorized' });

    return VerfiyAuth(token)
        .then((decoded) => {
            req.decoded = decoded;
            next();
        })
        .catch((err) => next(err));
}

module.exports = checkAuth;