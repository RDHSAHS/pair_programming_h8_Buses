const express = require('express')
const Controller = require('../controllers/controller')

const bus = express.Router()


bus.get('/', Controller.showHome)


module.exports = bus