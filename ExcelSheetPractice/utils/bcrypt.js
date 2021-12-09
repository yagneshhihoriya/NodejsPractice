const bcrypt = require('bcryptjs')

const createHash = async (plainText) => {
    let hash = await bcrypt.hash(plainText, 10)
    return hash
}

const compareHash = async (plainText, hashPassword) => {
    let result = await bcrypt.compare(plainText, hashPassword)
    return result
}

module.exports = { createHash, compareHash }