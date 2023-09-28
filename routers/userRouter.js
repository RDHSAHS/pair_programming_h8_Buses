const express = require('express')
const Controller = require('../controllers/controller')

const user = express.Router()

// user.get('/', Controller.showUser)
user.get('/invoice', Controller.showInvoice)



module.exports = user