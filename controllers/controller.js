const { Op } = require('sequelize')
const {Bus, Passenger, Ticket, User} = require('../models')
class Controller {
    static goHome(req, res) {
        res.render('login')
    }

    static showHome(req,res){
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
            res.render('home', {data})
        })
        .catch(err=> {
            res.send(err)
        })
    }
    static searchBus(req,res){
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
            res.render('resultSearch', {data})
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

    static passengerList(req, res){
        Passenger.findAll({
            include: {
                model: Ticket,
            }
    })
        .then(data => {
            // console.log(data);
            res.render('passengerList', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static showEditPassenger(req, res){
        const id = req.params.UserId
        Passenger.findOne(id)
            .then((data)=> {
                // console.log(data);
                res.render('editPassenger', {data})
            })
            .catch((err)=>{
                res.send(err)
            })
    }

    static updatePassenger(req, res){
        const id = req.params.UserId
        const {firstName, lastName, dateOfBirth} = req.body
        Passenger.update({
            firstName: firstName,
            lastName: lastName,
            dateOfBirth : dateOfBirth
        }, {
            where: {
                id
            }
        })
            .then((data)=> {
                res.redirect('/user/passengers')
            })
            .catch((err)=> {
                res.send(err)
            })
    }

    static addPassenger(req, res){
        res.render('addPassenger')
    }
    static postPassenger(req, res){
        // console.log(req.params.id);
        // console.log(req.body);
        Passenger.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            dateOfBirth : req.body.dateOfBirth
        })
        .then(()=> {
            res.redirect('/user/passengers')
        })
        .catch((err)=> {
            res.send(err)
        })
    }

    static showUser(req, res){
        const UserId = req.params.UserId
        // console.log(UserId);
        Passenger.findByPk(UserId)
        .then(data => {
            // console.log(data.dataValues, 118);
            res.render('userProfile', {data})
        })
        .catch(err=> {
            // console.log(err);
            res.send(err)
        })
    }

    static showEditProfile(req, res){
        // const id = req.params.UserId
        // Passenger.findByPk(id, {
        //     include : {
        //         model: User,
        //     },
        // }, {
        //     where : {
        //         id : id
        //     }
        // })
        // .then(data => {
        //     res.render('editProfile', {data})
        // })
        // .catch(err => {
        //     res.send(err)
        // })
        res.render('editProfile')

    }
    static updateProfile(req,res){
        const id = req.params.UserId
        Passenger.findByPk(id, {
            include : {
                model: User,
            },
        }, {
            where : {
                id : id
            }
        })
        .then(data => {
            res.redirect(`/user/${data.id}/profile`, {data})
        })
        .catch(err => {
            res.send(err)
        })
    }
}
module.exports = Controller