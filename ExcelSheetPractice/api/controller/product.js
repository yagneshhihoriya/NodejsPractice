const model = require('../../models')


const addProduct = async (req, res, next) => {
    let result
    const { name, mrp, categoryId } = req.body
    const data = { name, mrp, categoryId }
    result = await model.category.findByPk(categoryId)
    if (!result) {
        return res.json({ success: false, message: "Category with given id Not Found" })
    }
    result = await model.product.create(data)
    if (result.length == 0) {
        return res.json({ success: false, message: "Data Not Inserted" })
    }
    res.json({ success: true, data: result })
}

const getProduct = async (req, res, next) => {
    const result = await model.product.findAll({
        include:[{
            model:model.category
        }]
    })
    if (result.length == 0) {
        return res.json({ success: false, message: "Data Not found" })
    }
    res.json({ success: true, data: result })
}

const getByIdProduct = async (req, res, next) => {
    const id = req.params.id
    const result = await model.product.findByPk(id)
    if (!result) {
        return res.json({ success: false, message: "Data Not found" })
    }
    res.json({ success: true, data: result })
}

const updateProduct = async (req, res, next) => {
    let result
    const id = req.params.id
    result = await model.product.findByPk(id)
    if (!result) {
        return res.json({ success: false, message: "Data Not found with given Id" })
    }
    result = await model.product.update(req.body, { where: { id }, returning: true, plain: true })
    // if (result.length == 0) return res.json({ success: false, error: "Data Not Updated", data: result })
    res.json({ success: true, data: result })
}

const deleteProduct = async (req, res, next) => {
    let result
    const id = req.params.id
    result = await model.product.findByPk(id)
    if (!result) {
        return res.json({ success: false, message: "Data Not found with given Id" })
    }
    result = await model.product.destroy({ where: { id } })
    // if (result.length == 0) return res.json({ success: false, error: "Data Not Updated", data: result })
    res.json({ success: true, error: null, data: result })
}

module.exports = { addProduct, getProduct, getByIdProduct, updateProduct, deleteProduct }