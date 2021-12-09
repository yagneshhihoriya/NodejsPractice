const { DataTypes } = require('Sequelize')
const sequelize = require('./index')
const Post = require('./Post')

const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        set(value) {
            this.setDataValue('name', value + " Singh")
        }
    },
    email: {
        type: DataTypes.STRING,
        defaultValue: "test@gmail.com"
    },
    gender: {
        type: DataTypes.STRING
    }
})

User.associations = function(){
    User.hasOne(Post,{foreignKey:'user_id',as:"user"})
}

module.exports = User