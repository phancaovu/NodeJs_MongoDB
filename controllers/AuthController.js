const User   = require('../models/user')
const bcrypt   = require('bcryptjs')
const jwt      = require('jsonwebtoken')
const { use } = require('../router/User')


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
const login =(req,res) => {
  try {
    const user = User.findOne({username:req.body.username})
  if (!user) {
    res.json("Incorrect username");
  }
  const validPassword = bcrypt.compare(
    req.body.password,
    user.password
  ) 
  if (!validPassword) {
    res.json("Incorrect password")
  }
  if (user && validPassword) {
    let token =  jwt.sign({id: user.id},process.env.ACCESS_KEY,{ expiresIn: "30h" })
    res.json({
      message: "Login thanh cong",
      token 
    })
  }
  }catch(error) {
    res.json({
      message: "login that bai"
    })
  }}


module.exports = {
  register,login
}
//   bcrypt.compare(req.body.password, 'superSecret', function(err, res) {
//     if(req.body.password != user.password){
//       res.json({success: false, message: 'passwords do not match'});
//     } else {
//       let token =  jwt.sign({id: user.id},process.env.ACCESS_KEY,{ expiresIn: "30h" })
//         res.json({
//           message: "Login thanh cong",
//             token 
//         })
//     }
//   })
//  }catch(error) {
//     res.json({
//       message: "login that bai"
//     })}