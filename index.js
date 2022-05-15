const express      = require('express')
const mongoose     = require('mongoose')
const morgan       = require('morgan')
const bodyParser   = require('body-parser')
require('dotenv').config() 
const UserRouter   = require('./router/User')
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("CONNECTED TO MONGO DB");
  })

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('server is running 123' +  PORT )
})
app.use('/api/user',UserRouter)

