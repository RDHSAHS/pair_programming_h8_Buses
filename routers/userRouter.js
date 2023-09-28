const express = require('express')
const Controller = require('../controllers/controller')
const UserController = require('../controllers/userController')

const user = express.Router()

user.get('/', Controller.showHome)
user.get('/register', UserController.registerForm)
user.post('/register', UserController.addUser)
user.get('/login', UserController.loginForm)
user.post('/login', UserController.postLogin)
user.get('/logout', UserController.getLogOut)

const isLoggedIn = function(req, res, next) {
  if (!req.session.userId) {
    const error = `Please Login First`
    res.redirect(`/user/login?error=${error}`)
  } else {
    next()
  }
}

const isAdmin = function(req, res, next) {
  if (req.session.userId && req.session.role !== `admin`) {
    const error = `You have no access`
    res.redirect(`/user/login?error=${error}`)
  } else {
    next()
  }
}



module.exports = user