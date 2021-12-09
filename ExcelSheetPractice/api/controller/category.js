const model = require('../../models')
const { GetFromRedis, SetInRedis } = require('../../utils/redis')

const addCategory = async (req, res, next) => {
    let result
    const { name } = req.body
    const data = { name }
    result = await model.category.create(data)
    if (result.length == 0) {
        return res.json({ success: false, message: "Data Not Inserted" })
    }
    res.json({ success: true, data: result })
}

const getCategory = async (req, res, next) => {
    const result = await model.category.findAll({})
    if (result.length == 0) {
        return res.json({ success: false, message: "Data Not found" })
    }
    res.json({ success: true, data: result })
}

const getByIdCategory = async (req, res, next) => {
    const id = req.params.id
    const result = await model.category.findByPk(id)
    if (!result) {
        return res.json({ success: false, message: "Data Not found" })
    }
    res.json({ success: true, data: result })
}

const updateCategory = async (req, res, next) => {
    let result
    const id = req.params.id
    result = await model.category.findByPk(id)
    if (!result) {
        return res.json({ success: false, message: "Data Not found with given Id" })
    }
    result = await model.category.update(req.body, { where: { id }, returning: true, plain: true })
    res.json({ success: true, data: result })
}

const deleteCategory = async (req, res, next) => {
    let result
    const id = req.params.id
    result = await model.category.findByPk(id)
    if (!result) {
        return res.json({ success: false, message: "Data Not found with given Id" })
    }
    result = await model.category.destroy({ where: { id } })
    // if (result.length == 0) return res.json({ success: false, error: "Data Not Updated", data: result })
    res.json({ success: true, error: null, data: result })
}

module.exports = { addCategory, getCategory, getByIdCategory, updateCategory, deleteCategory }