const express = require('express')
const router = express()
const path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/nodemailer.html'))
})

router.post('/', (req, res) => {

})


module.exports = router