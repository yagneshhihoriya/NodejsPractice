const { DataTypes } = require('Sequelize')
const sequelize = require('./index')
const User = require('./User')
// module.exports = (sequelize, DataTypes) => {
//     const Post = sequelize.define('post', {
//         post: {
//             type: DataTypes.STRING,
//             default : "Demo Post"
//         },
//         user_id:{
//             type:DataTypes.INTEGER
//         }
//     })
//     return Post
// }

const Post = sequelize.define('post', {
    post: {
        type: DataTypes.STRING,
        default: "Demo Post"
    },
    user_id: {
        type: DataTypes.INTEGER
    }
})

Post.associations = function (){
    Post.belongsTo(User,{foreignKey:'user_id',as:'user'})
}

module.exports = Post

