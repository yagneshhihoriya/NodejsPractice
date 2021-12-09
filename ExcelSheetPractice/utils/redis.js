const redis = require('redis')
const client = redis.createClient(6379)
const GetFromRedis = async (keyValue) => {
    return new Promise((resolve, reject) => {
        client.GET(keyValue, (err, data) => {
            if (err) reject(err)
            if (data !== null) {
               resolve(data)
            }
            else{
                
            }
        })
    })
}

const SetInRedis = (keyValue, data) => {

    client.setex(keyValue, 3600, JSON.stringify(data))
}

module.exports = { GetFromRedis, SetInRedis }