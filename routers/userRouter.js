const express = require('express')
const Controller = require('../controllers/controller')

const user = express.Router()

user.get('/', Controller.showHome)
user.get('/:UserId/profile', Controller.showUser)
user.get('/:UserId/profile/edit', Controller.showEditProfile)
user.post('/:UserId/profile/edit', Controller.updateProfile)
user.get('/register', Controller.registerForm)
user.get('/passengers', Controller.passengerList)
user.get('/passengers/:id/edit', Controller.showEditPassenger)
user.post('/passengers/:id/edit', Controller.showEditPassenger)
user.get('/passengers/add', Controller.addPassenger)
user.post('/passengers/add', Controller.postPassenger)



module.exports = user