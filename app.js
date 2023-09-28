const express = require('express')
const router = require('./routers')
const session = require('express-session')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static('Public'))
app.use(session({
  secret: 'rahasiahehehe',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    sameSite: true
   }
}))
app.use(router)

app.listen(3000, () => {
  console.log(`Sailing from port 3000`);
})