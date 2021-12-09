const express = require('express')
const router = express.Router()
const demoController = require('../api/controller/demo')

router.get('/',demoController.getDemo)
router.get('/new-demo',(req,res)=>{
    res.send("Hello Demo ROute")
})






module.exports = router