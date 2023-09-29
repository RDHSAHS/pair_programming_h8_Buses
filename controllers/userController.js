const { Op } = require('sequelize')
const { Bus, Passenger, Ticket, User } = require('../models')
const bcryptjs = require('bcryptjs')

class UserController {
  static registerForm(req, res) {
    res.render('registerForm')
  }
  static addUser(req, res) {
    const { username, password, role } = req.body
    User
      .create({ username, password, role })
      .then(newUser => {
        res.redirect('login')
      })
      .catch(err => {
        res.send(err.message)
      })
  }

  static loginForm(req, res) {
    const { error } = req.query

    res.render('loginForm', { error })
  }
  static postLogin(req, res) {
    const { username, password } = req.body

    User
      .findOne({ where: { username } })
      .then(user => {
        if (user) {
          const isValidPassword = bcryptjs.compareSync(password, user.password)
          if (isValidPassword) {
            req.session.userId = user.id
            req.session.role = user.role
            return res.redirect('/')
          } else {
            const error = 'INVALID PASSWORD'
            return res.redirect(`/user/login?error=${error}`)
          }
        } else {
          const error = 'INVALID USERNAME'
          return res.redirect(`/user/login?error=${error}`)
        }
      })
      .catch(err => {
        res.send(err.message)
      })
  }

  static getLogOut(req, res) {
    req.session.destroy(err => {
      if (err) return res.send(err)
      res.redirect('/user/login')
    })
  }
}

module.exports = UserController