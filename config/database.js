const Sequelize = require('sequelize')
module.exports = new Sequelize("todo", "rooted", "123", {
    host: "localhost",
    dialect: "mysql"
})