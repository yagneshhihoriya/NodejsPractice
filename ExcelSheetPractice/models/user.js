module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        password:{
            type:DataTypes.STRING,
            field:'password'
        }

    },{
        freezeTableName : true,
        timestamps:false
    })

    return user
}