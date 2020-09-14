const {Router} = require("express")
const User = require('../models/User')
const router = Router()

// router.get('/', (req, res) => 
// User.findAll().then(users => {
//     console.log(users);
//     res.sendStatus(200);
     
// })
// .catch(err => console.log(err))
// )

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        
        const {name} = req.body
        

        const candidate = await User.findOne({
            where:
            { name }
        })

        if (candidate) {
            return res.json({name, userId: candidate.id})
            // return res.status(202).json({message: "Вы уже пользовались системой, ваши данные сохранены"})

        }

        const user = new User({ name })
        await user.save()
        res.json({name, userId: user.id})
        // res.status(201).json({message: "Пользователь создан"})
    } catch(e) {
        res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
        console.log(e);
        
    }
})

module.exports = router