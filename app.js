const express = require('express')
const config = require('config')
// const Sequelize = require('sequelize')

const db = require("./config/database")

const app = express()

app.use(express.json({extended: true}))

app.use('/api/login', require('./routes/login.routes'))

app.use('/api/todos', require('./routes/todo.routes'))

const PORT = config.get('port')

const start = () => {
    db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.error(err)
    )

    app.listen(PORT, () => {
        (err) => {
            throw err
        }
        console.log(`App has been started on port ${PORT}...`)
    })
}

start()


// app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
