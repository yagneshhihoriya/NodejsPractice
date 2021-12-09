const jwt = require('jsonwebtoken')
const { verifyToken } = require('../../utils/jwt')

const TokenVerifier = async (req, res, next) => {
    try {
        let authHeader = req.headers.authorization
        const token = authHeader.split(' ')[1]
        let result = await verifyToken(token)
        if (result) {
            req.decoded = result
            next();
        }
        else { return res.status(404).send({ success:false,message: 'Token Validation Failed...!' }) }
    }
    catch (err) {
        next({ success:false, message: 'Token Validation Failed...!' })
    }
}

module.exports = { TokenVerifier }

