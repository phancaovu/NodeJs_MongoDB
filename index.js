const express      = require('express')
const mongoose     = require('mongoose')
const morgan       = require('morgan')
const bodyParser   = require('body-parser')
//const userController = require('./controllers/userController')
require('dotenv').config() 
const UserRouter   = require('./router/User')
const app = express()
app.use(express.static(__dirname + 'public'))
app.set('views', './views'); // Thư  mục views nằm cùng cấp với file app.js
app.set('view engine', 'ejs'); // Sử   dụng pug làm view engine

const server =require("http").Server(app)
const io     = require("socket.io")(server)

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("CONNECTED TO MONGO DB");
  })

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('server is running 123' +  PORT )
})
app.use('/api/user',UserRouter)

