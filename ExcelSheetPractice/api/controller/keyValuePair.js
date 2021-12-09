const keyValuePair = (req,res) =>{
    res.send(req.body)
}

const keyValuePairMiddleware = (req,res,next) =>{
    if(Object.keys(req.body) == 0){
        throw new Error("Please Pass Object in Body")
    }
    req.body.extraKey = "Random Value"
    next()
    
}

module.exports = {keyValuePair,keyValuePairMiddleware}