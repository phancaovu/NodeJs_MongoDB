const express = require('express')
const User = require('../models/user')

// MAN HINH CHINH
const layout = (req,res) =>{
    res.render("layout")
}
// LIST USER
const index = (req, res, next) =>{
    User.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "loi "
        })
    })
}


// FIND USER
const show = (req, res) =>{
    User.findById(req.params.id)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "loi "
        })
    })

}
// ADD USER
const insert= (req, res,next) => {
    let user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
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
// UPDATE USER
const Update = (req,res,next) =>{
    let UpdateUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    User.findByIdAndUpdate(req.params.ids, {$set: UpdateUser})
    .then(() =>{
        res.json({
            message: "update thanh cong"
        })

    })
    .catch(error =>{
        res.json({
            message: "Update that bai"
        })
    })
}
// DELETE USER
const del = (req,res, next) =>{
    //let  NhanvienID = req.body.NhanvienID
    User.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.json({
            message: "Xoa thanh cong"
        })
    })
    .catch(error =>{
        res.json({
            message: "Xoa That bai "
        })
    })

}
module.exports ={
    layout,index,show,del,Update,insert
}
