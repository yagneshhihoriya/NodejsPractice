const express = require('express')
const router = express.Router()
const {addUser , getAllUser , deleteUser , addInBulk , updateUser , addPost , getPost , updatePost , oneToOne} = require('./controller/User')


router.post('/user/addInBulk',addInBulk)
router.post('/user/add',addUser)
router.get('/user',getAllUser)
router.delete ('/user/:id',deleteUser)
router.put('/user/:id',updateUser)

router.get('/post',getPost)
router.post('/post/add',addPost)
router.put('/post/:id',updatePost)


router.get('/onetoone',oneToOne)
module.exports = router