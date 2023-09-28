const express = require('express')
const router = require('./routers')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static('Public'))
app.use(router)

app.listen(3000, () => {
  console.log(`Sailing from port 3000`);
})