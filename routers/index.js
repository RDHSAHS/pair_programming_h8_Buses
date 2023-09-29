const express = require('express')
const Controller = require('../controllers/controller')
const userRouter = require('../routers/userRouter')
const busRouter = require('../routers/busRouter')

const router = express.Router()

router.get('/', Controller.showHome)

router.use('/user', userRouter)
router.use('/bus', busRouter)


module.exports = router