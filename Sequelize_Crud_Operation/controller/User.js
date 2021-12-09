const { Sequelize, Op } = require('sequelize')
const Post = require('../model/Post')
const User = require('../model/User')


const redis = require('redis')
const client = redis.createClient(6379)

const model= require('../model/index')
const addUser = async (req, res) => {
    let { name, email, gender } = req.body
    let user = await User.create({
        name: name,
        email: email,
        gender: gender
    })
    res.send(user)
}

const getAllUser = async (req, res) => {
 
    let result = client.GET("allValue2", (err, data) => {
        if (err) throw err
        if (data !== null) {
            res.send({ "redis": "true", data: JSON.parse(data) })
        }
    })

    result = await User.findAll({})


    if (!result) return res.send({ message: "User Not Found", data: result })
    client.setex("allValue2", 3600, JSON.stringify(result))
    res.send({ "redis": "false", data: result })
}

const deleteUser = async (req, res) => {
    let userid = req.params.id
    let result = await User.destroy({
        where: {
            id: userid
        }
    })
    if (!result) return res.send({ message: "User Not Deleted" })
    res.send({ message: "User Deleted" })
}

const addInBulk = async (req, res) => {
    let result = await User.bulkCreate(req.body)
    if (!result) return res.send({ message: "Something went Wrong" })
    res.send({ data: result })
}

const updateUser = async (req, res) => {
    let userId = req.params.id
    let result = User.update(req.body, {
        where: {
            id: userId
        }
    })
    if (!result) return res.send({ message: "Data Not Updated" })
    res.send({ message: "Data Updated" })
}

const addPost = async (req, res) => {
    let { post, user_id } = req.body
    let result = await Post.create({
        post: post,
        user_id: user_id
    })
    res.send(result)
}

const getPost = async (req, res) => {

}

const updatePost = async (req, res) => {

}

const oneToOne = async (req, res) => {
    const result = await Post.findAll({
        // where:{
        //     id:5
        // },
        include:[{
            model:User,
            as:'user'
        }]
    })
    res.send(result)
}
module.exports = { addUser, getAllUser, deleteUser, addInBulk, updateUser, updatePost, getPost, addPost, oneToOne }
