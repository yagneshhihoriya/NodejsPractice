const express = require('express')
const router = express.Router()


const { AsyncErrorHandler } = require('../api/middleware/error')
const { addUser, getUser, getByIdUser, updateUser, deleteUser, login } = require('../api/controller/user')

router.post('/login', AsyncErrorHandler(login))
router.post('/signin', AsyncErrorHandler(addUser))
router.get('/', AsyncErrorHandler(getUser))
router.get('/:id', AsyncErrorHandler(getByIdUser))
router.delete('/:id', AsyncErrorHandler(deleteUser))
router.put('/:id', AsyncErrorHandler(updateUser))





module.exports = router