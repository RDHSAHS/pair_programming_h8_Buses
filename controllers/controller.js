class Controller {
  static showHome(req, res) {
    res.render('home')
  }

  static registerForm(req, res) {

  }

  static addUser(req, res) {
    res.render('user')
  }

  static showInvoice(req, res) {
    res.render('invoice')
  }
}

module.exports = Controller 