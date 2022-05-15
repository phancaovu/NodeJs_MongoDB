const User   = require('../models/user')
const bcrypt   = require('bcryptjs')
const jwt      = require('jsonwebtoken')


//REGISTER 
const register = async (req,res,next) =>{
  const salt = await bcrypt.genSalt(10)
  const hashed = await bcrypt.hash(req.body.password, salt)
  let user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashed
})
user.save()
    .then(response => {
        res.json({
            message: "add successfuly!"
        })
    })
    .catch(err => {
        res.json({
            message: "them that bai" 
        })
    })
}   

//LOGIN 
const login = async (req,res,next) =>{
  try {
    const user = await User.findOne({username: req.body,username })
  if (!user) {
    res.json("Incorrect username");
  }
  const validPassword = await bcrypt.compare(
    req.body.password,
    user.password
  )
  if (!validPassword) {
    res.json("Incorrect password")
  }
  if (user && validPassword) {
    let token = jwt.sign({username: user.username},process.env.ACCESS_KEY,{ expiresIn: "30s" })
    res.json({
      message: "Login thanh cong",
      token 
    })
  }
  }catch(error) {
    res.json(error)
  }
}

module.exports = {
  register,login
}