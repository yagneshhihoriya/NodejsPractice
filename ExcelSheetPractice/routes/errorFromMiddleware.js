const express = require('express')
const router = express.Router()
const {errorFromMiddleware,CheckGreaterThen10} = require('../api/controller/errorFromMiddleware')
const {AsyncErrorHandler} = require('../api/middleware/error')

router.get('/:id',CheckGreaterThen10,AsyncErrorHandler(errorFromMiddleware))






module.exports = router