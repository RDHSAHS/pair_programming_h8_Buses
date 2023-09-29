const express = require('express')
const Controller = require('../controllers/controller')
const UserController = require('../controllers/userController')
const session = require('express-session')

const user = express.Router()

const isLoggedIn = function (req, res, next) {
  if (!req.session.userId) {
    const error = `Please Login First`
    res.redirect(`/user/login?error=${error}`)
  } else {
    next()
  }
}
const isAdmin = function (req, res, next) {
  if (req.session.userId && req.session.role === 'admin') {
    next();
  } else {
    const error = 'You have no access';
    res.redirect(`/user/login?error=${error}`);
  }
}

user.get('/', Controller.showHome)
user.get('/register', UserController.registerForm)
user.post('/register', UserController.addUser)
user.get('/login', UserController.loginForm)
user.post('/login', UserController.postLogin)
user.get('/logout', UserController.getLogOut)
user.get('/passengers', isLoggedIn, isAdmin, Controller.passengerList)
user.get('/passengers/add', isAdmin, Controller.addPassenger)
user.post('/passengers/add', isAdmin, Controller.postPassenger)
user.get('/passengers/:id/edit', isAdmin, Controller.showEditPassenger)
user.post('/passengers/:id/edit', isAdmin, Controller.showEditPassenger)
user.get('/passengers/:id/delete', Controller.deletePassenger)
user.get('/:UserId/profile', Controller.showUser)
user.get('/:UserId/profile/edit', Controller.showEditProfile)
user.post('/:UserId/profile/edit', Controller.updateProfile)

module.exports = user