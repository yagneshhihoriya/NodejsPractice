const express = require('express')
const server = express()
const db = require('./models/index')

db.sequelize.sync({ force: false }).then(() => console.log("Database Created")).catch((ex) => console.log(ex))


server.use(express.json())
server.use('/', require('./app.js'))

server.listen(1234, () => {
    console.log("Server Running at 1234")
})