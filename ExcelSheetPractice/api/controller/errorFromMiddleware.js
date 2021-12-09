const errorFromMiddleware = (req, res) => {
    res.send("The Number is Greater the 10")
}

const CheckGreaterThen10 = (req, res, next) => {
    if(req.params.id > 10){
        next()
    }
    throw new Error("The Number is Not Greater the 10")
}










module.exports = { errorFromMiddleware,CheckGreaterThen10 }