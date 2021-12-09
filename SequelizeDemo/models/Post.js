

module.exports = (sequelize,Sequelize)=>{
    const Post = sequelize.define("post",{
        name: {
            type: Sequelize.STRING,
        },
        user_id :{
            type:Sequelize.INTEGER
        }
    })

    Post.associate = function(models){
        Post.belongsTo(models.user,{foreignKey:'user_id'})
    }
    return Post
}