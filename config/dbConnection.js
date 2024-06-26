const Sequelize = require('sequelize');

const dbName = "testing";
const dbUser = "root";
const dbPassword = "";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: 'localhost',
    port: 3306,
    dialect: "mysql"
});

sequelize.authenticate()
    .then(() => console.log('Connected to MySQL database'))
    .catch(error => console.error('Error connecting to MySQL:', error));

module.exports = sequelize;








// const Sequelize=require("sequelize")
// const dbName="testing"
// const dbUser="root"
// const dbPassword=""

// const sequelize=new Sequelize(dbName,dbUser,dbPassword,{
//     host: 'localhost',
//     port:3306,
//     dialect:"mysql"
// })
// sequelize.authenticate()
//   .then(() => console.log('Connected to MySQL database'))
//   .catch(error => console.error('Error connecting to MySQL:', error));

// const db={}
// db.Sequelize=Sequelize
// db.sequelize=sequelize

// // models--table
// db.customers=require("../models/userModel")(sequelize,Sequelize)

// module.exports=db;



