const express = require('express')
const Controller = require('../controllers/controller')

const bus = express.Router()


// bus.get('/', Controller.showHome)
// bus.get('/search', Controller.searchTicket)
bus.post('/result', Controller.searchBus)


module.exports = bus