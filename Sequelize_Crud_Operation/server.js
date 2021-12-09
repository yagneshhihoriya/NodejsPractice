const express = require('express')
const server = express()
const port = 1234
const route = require('./route')


server.use(express.json())
require('./model/index')
server.use('/api',route)
server.use('*',(req,res)=>{
    res.send("Route Not Exist")
})



server.listen(port,console.log("Server Running at port "+port))






