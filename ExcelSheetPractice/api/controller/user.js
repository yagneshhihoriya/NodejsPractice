const model = require('../../models')
const { createHash, compareHash } = require('../../utils/bcrypt')
const {GenerateToken} = require('../../utils/jwt')


const addUser = async (req, res, next) => {
    let result
    let { name, password } = req.body
    password = await createHash(password)
    const data = { name, password }
    result = await model.user.create(data)
    if (result.length == 0) {
        return res.json({ success: false, message: "Data Not Inserted" })
    }
    res.json({ success: true, data: result })
}

const getUser = async (req, res, next) => {
    const result = await model.user.findAll({})
    if (result.length == 0) {
        return res.json({ success: false, message: "Data Not found" })
    }
    res.json({ success: true, data: result })
}

const getByIdUser = async (req, res, next) => {
    const id = req.params.id
    const result = await model.user.findByPk(id)
    if (!result) {
        return res.json({ success: false, message: "Data Not found" })
    }
    res.json({ success: true, data: result })
}

const updateUser = async (req, res, next) => {
    let result
    const id = req.params.id
    result = await model.user.findByPk(id)
    if (!result) {
        return res.json({ success: false, message: "Data Not found with given Id" })
    }
    result = await model.user.update(req.body, { where: { id }, returning: true, plain: true })
    // if (result.length == 0) return res.json({ success: false, error: "Data Not Updated", data: result })
    res.json({ success: true, data: result })
}

const deleteUser = async (req, res, next) => {
    let result
    const id = req.params.id
    result = await model.user.findByPk(id)
    if (!result) {
        return res.json({ success: false, message: "Data Not found with given Id" })
    }
    result = await model.user.destroy({ where: { id } })
    // if (result.length == 0) return res.json({ success: false, error: "Data Not Updated", data: result })
    res.json({ success: true, error: null, data: result })
}

const login = async (req, res, next) => {
    let result
    let { name, password } = req.body
    result = await model.user.findOne({ where: { name } })
    if (!result) { return res.json({success:false,message:"Incorrect Username and Password"}).status(404) }
    if(!(await compareHash(password,result.password))){
        return res.json({success:false,message:"Incorrect Username and Password"}).status(404)
    }
    result = await GenerateToken(name)
    res.json({success:true,message:"Login Successfull",token:result})
}

module.exports = { addUser, getUser, getByIdUser, updateUser, deleteUser, login }