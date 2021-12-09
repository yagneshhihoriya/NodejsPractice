module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('category', {
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
    },{
        freezeTableName : true,
        timestamps:false
    })
    return category
}