const express = require('express')
const router = express.Router()
const { addProduct, getProduct, getByIdProduct, updateProduct, deleteProduct } = require('../api/controller/product')
const {AsyncErrorHandler} = require('../api/middleware/error')



router.get('/', AsyncErrorHandler(getProduct))
router.get('/:id', AsyncErrorHandler(getByIdProduct))
router.post('/', AsyncErrorHandler(addProduct))
router.put('/:id', AsyncErrorHandler(updateProduct))
router.delete('/:id', AsyncErrorHandler(deleteProduct))





module.exports = router