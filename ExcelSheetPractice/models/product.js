
module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('product', {
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        mrp: {
            type: DataTypes.INTEGER,
            field: 'mrp'
        },
        categoryId: {
            type: DataTypes.INTEGER,
            field: 'category_id'
        },

    }, {
        freezeTableName: true,
        timestamps: false
    })

    product.associate = (model) => {
        product.hasOne(model.category, { foreignKey: 'category_id' })
    }
    
    return product
}

