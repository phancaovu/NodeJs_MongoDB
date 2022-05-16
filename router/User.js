const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')
const userController = require('../controllers/userController')

router.get("/" ,userController.layout)
router.get("/index",AuthController.login ,userController.index)
router.post("/them", userController.insert)
router.post("/show", userController.show)
router.post("/sua", userController.Update)
router.post("/xoa", userController.del)
router.post("/register", AuthController.register)
router.post("/login", AuthController.login)


module.exports = router