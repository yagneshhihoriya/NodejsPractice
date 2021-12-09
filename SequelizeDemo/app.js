const express = require('express')
const route = express()
const model = require('./models')

const addUser = async (req, res) => {
    let { name, email, gender } = req.body
    let user = await model.user.create({
        name: name,
        email: email,
        gender: gender
    })
    res.send(user)
}

const addPost = async (req, res) => {
    let { name, user_id } = req.body
    let user = await model.post.create({
        name: name,
        user_id:user_id
    })
    res.send(user)
}

route.post('/user', addUser)

route.post('/post', addPost)

route.get('/onetoone',async (req,res)=>{
    const result = await model.post.findAll({
        include:[{
            model:model.user
        }]
    })
    res.send(result)
})


module.exports = route