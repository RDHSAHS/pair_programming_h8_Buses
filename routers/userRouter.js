const express = require('express')
const Controller = require('../controllers/controller')
const UserController = require('../controllers/userController')

const user = express.Router()

user.get('/', Controller.showHome)
user.get('/register', UserController.registerForm)
user.post('/register', UserController.addUser)
user.get('/login', UserController.loginForm)
user.post('/login', UserController.postLogin)



module.exports = user