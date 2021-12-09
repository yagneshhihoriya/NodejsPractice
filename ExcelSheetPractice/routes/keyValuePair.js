const express = require('express')
const router = express.Router()
const {keyValuePair,keyValuePairMiddleware} = require('../api/controller/keyValuePair')
const {AsyncErrorHandler} = require('../api/middleware/error')

router.post('/',keyValuePairMiddleware , AsyncErrorHandler(keyValuePair))



module.exports = router