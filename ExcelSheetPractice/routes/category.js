const express = require('express')
const router = express.Router()
const { addCategory, getCategory, getByIdCategory, updateCategory, deleteCategory } = require('../api/controller/category')
const {AsyncErrorHandler} = require('../api/middleware/error')



router.get('/', AsyncErrorHandler(getCategory))
router.get('/:id', AsyncErrorHandler(getByIdCategory))
router.post('/', AsyncErrorHandler(addCategory))
router.put('/:id', AsyncErrorHandler(updateCategory))
router.delete('/:id', AsyncErrorHandler(deleteCategory))





module.exports = router