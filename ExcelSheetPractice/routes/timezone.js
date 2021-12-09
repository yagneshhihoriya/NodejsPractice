const express = require('express')
const router = express.Router()
const timezoneController = require('../api/controller/timezone')

router.get('/',timezoneController.gettimeZone)



module.exports = router