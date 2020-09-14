const Sequelize = require('sequelize')
const db = require('../config/database');
const User = require('./User');


const Model = Sequelize.Model;

class Todo extends Model {}
Todo.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
        sequelize: db,
        modelName: 'todo'
});

module.exports = Todo;