const express = require('express')
const router = express.Router()
const { uploadController } = require('../api/controller/upload')

const { upload } = require('../utils/multer')
const { AsyncErrorHandler } = require('../api/middleware/error')
const path = require('path')


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/multer.html'))
})


router.post('/upload', upload.single('file'), AsyncErrorHandler(uploadController))


module.exports = router