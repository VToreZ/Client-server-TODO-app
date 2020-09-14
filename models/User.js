const Sequelize = require('sequelize')
const db = require('../config/database');
const Todo = require('./Todo');


const Model = Sequelize.Model;

class User extends Model {}
User.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
        sequelize: db,
        modelName: 'user'
});

User.hasMany(Todo)

db.sync({force: false}).then(() => {
    console.log("Tables have been created");
  }).catch(err => console.log(err));

module.exports = User;