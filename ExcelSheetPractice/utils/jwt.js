const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();

const GenerateToken = async (value) =>{
    let token = await jwt.sign(value,process.env.SECRET)
    return token
}   

const verifyToken = async (value) =>{
    let result = await jwt.verify(value,process.env.SECRET)
    return result
}


module.exports = {GenerateToken, verifyToken}
