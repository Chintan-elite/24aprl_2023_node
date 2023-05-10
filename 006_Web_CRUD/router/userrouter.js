const router = require("express").Router()
const { log } = require("console")
const User = require("../model/users")

router.get("/",(req,resp)=>{
    resp.redirect("login")
})

router.get("/registration",(req,resp)=>{
    resp.render("registration")
})

router.get("/login",(req,resp)=>{
    resp.render("login")
})

router.post("/do_register",(req,resp)=>{
    console.log(req.body);
})

module.exports = router