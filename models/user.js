const mongoose  = require('mongoose')
const Schema    = mongoose.Schema
const userSchema = new mongoose.Schema (
    {
       
        username: {
          type: String,
          unique: true
        },
        email: {
          type: String,
          unique: true
        },
        password: {
          type: String,
          min: 6
        }
   
}, {timestamps: true})

const User = mongoose.model("User", userSchema)
module.exports = User