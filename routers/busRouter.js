const express = require('express')
const Controller = require('../controllers/controller')

const bus = express.Router()

bus.post('/result', Controller.searchBus)


module.exports = bus