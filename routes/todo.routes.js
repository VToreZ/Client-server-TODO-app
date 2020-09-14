const {Router} = require("express")
const Todo = require('../models/Todo')
const User = require('../models/User')
const { route } = require("./login.routes")
const router = Router()

router.post('/', async (req, res) => {
    try {
        const {userId} = req.body
        const todos = await Todo.findAll({
            where: { userId: userId }
        })
        console.log('TODOS:', todos);
        
        res.json({todos})
    } catch (err) {
        res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
        console.log(err);
    }
})

router.post('/add', async (req, res) => {
    try {
        const {userId, title} = req.body
        const todo = new Todo({title, userId})
        todo.save()
            .then(ress => {
                const todoItem = {id: ress.id, title: ress.title}
                console.log(todoItem);
                
                res.status(200).json({todoItem,  message: "Задание успешно добавлено"})
            })
    } catch (err) {
        res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
        console.log(err);
    }
}
)
router.post('/delete', async (req, res) => {
    try {
        const {userId, id} = req.body
        // const todos = await Todo.findAll({
        //     where: { userId: userId }
        // }).then(ress => {
        //     res.json({todos: todos.filter((t) => !(t.id == id))})
        // })
        Todo.destroy({
            where: { id: id }
        }).then(async (rowDeleted) =>  { // rowDeleted will return number of rows deleted
            if (rowDeleted === 1) {
                const todos = await Todo.findAll({
                    where: { userId: userId }
                })
                res.status(200).json({todos,  message: "Задание успешно добавлено"})

            }
        }) 
    } catch (err) {
        res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
        console.log(err);
    }
}
)

module.exports = router