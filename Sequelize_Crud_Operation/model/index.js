const {Sequelize,DataTypes} = require('sequelize')

const sequelize = new Sequelize('sequelize','root','',{
    host:'localhost',
    dialect:'mysql',
    logging:false,
    pool:{max:5,min:0,idle:10000}
})

try{
    sequelize.authenticate().then(()=>{
        console.log("Database Connected")
    }).catch(ex=>{
        console.log("Error  "+ ex)
    })
}catch(ex){
    console.log(ex)
}


// const db = {}
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

sequelize.sync({force:false,match:/sequelize$/}).then(()=>{
    console.log("Sync")
}).catch(ex=>{
    console.log("Sync Error " +ex)
})

// db.users = require('./User')(sequelize,DataTypes)
// db.posts = require('./Post')(sequelize,DataTypes)


// db.users.hasOne(db.posts,{foreignKey:'user_id'})
// db.posts.belongsTo(db.users,{foreignKey:'user_id'})

module.exports = sequelize