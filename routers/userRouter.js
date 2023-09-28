const express = require('express')
const Controller = require('../controllers/controller')

const user = express.Router()

user.get('/', Controller.showHome)
user.get('/register', Controller.registerForm)



module.exports = user