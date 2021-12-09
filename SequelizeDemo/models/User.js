

module.exports = (sequelize,Sequelize)=>{
    const User = sequelize.define("user",{
        name: {
            type: Sequelize.STRING,
            set(value) {
                this.setDataValue('name', value + " Singh")
            }
        },
        email: {
            type: Sequelize.STRING,
            defaultValue: "test@gmail.com"
        },
        gender: {
            type: Sequelize.STRING
        }
    })

    User.associate = function(models){
        User.hasMany(models.post,{foreignKey:'user_id'})
    }
    return User
}