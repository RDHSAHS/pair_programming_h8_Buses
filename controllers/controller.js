const { Op } = require('sequelize')
const {Bus, Passenger, Ticket, User} = require('../models')
class Controller {
    static goHome(req, res) {
        res.render('login')
    }

    static showHome(req,res){
        Bus.findAll()
        .then(data => {
            res.render('home', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }
    static searchTicket(req, res){
        let {departure, destination, maxSeat, departureDate} = req.body
        let options = {
            where : {}
        }
        if (departure && destination && maxSeat && departureDate) {
            options.where.departure = {
                [Op.iLike]: `%${departure}%`
            },
            options.where.destination = {
                [Op.iLike]: `%${destination}%`
            },
            options.where.maxSeat = {
                [Op.gt]: 0
            },
            options.where.departureDate = {
                departureDate: `${Ticket.departureDate}`
            }
        }
        Bus.findAll( options, {
            include : {
                model: Ticket
            }
        })
        .then(data => {
            res.render('ticket', {data})
        })
        .catch(err=> {
            res.send(err)
        })
    }
    static registerForm(req, res){
        res.render('registerForm')

    }
    static postRegister(req, res){

    }
}
module.exports = Controller