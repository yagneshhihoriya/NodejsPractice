const express = require('express')
const router = express.Router()
const demoRoute = require('./demo')
const timezone = require('./timezone')
const keyValuePair = require('./keyValuePair')
const errorFromMiddleware = require('./errorFromMiddleware')
const product = require('./product')
const category = require('./category')
const user = require('./user')
const upload = require('./upload')
const { TokenVerifier } = require('../api/middleware/Auth')
const nodemailer = require('./nodemailer')





router.use('/demo', demoRoute)
router.use('/timezone', timezone)
router.use('/error-from-middleware', errorFromMiddleware)
router.use('/key-value-pair', keyValuePair)
router.use('/product', TokenVerifier, product)
router.use('/category', TokenVerifier, category)
router.use('/user', user)
router.use('/multer', upload)
router.use('/nodemailer', nodemailer)


module.exports = router