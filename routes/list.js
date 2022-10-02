const express = require('express')
const router = express.Router()
const Userdata = require('../models/userdata')
const jwt = require('jsonwebtoken')

router.get('/users',async (req, res) => {

    try{
        const list = await Userdata.find()
        res.json(list)
    }catch (err) {
        res.status(500).json ({message:err.message})
    }
})
router.get('/authuser',authToken,async (req, res) => {

    try{
        const list = await Userdata.find()
        res.json(list.filter(post=>post.userName === req.pass.name))
    }catch (err) {
        res.status(500).json ({message:err.message})
    }
})


router.post('/login',async (req, res) => {
    const userdata = new Userdata ({
        userName: req.body.userName,
        password: req.body.password
    })
    try {
        const newUserdata = await userdata.save()
        res.status(201).json(newUserdata)
    }catch (err) {
        res.status(400).json({message: err.message })
    }
})

router.post('/auth',async (req, res) => {
    const pword = req.body.userName
    const pass ={ name:pword}

    const accessToken = jwt.sign(pass, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})
})

function authToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token ==null) return res.sendStatus(401)

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,pass) => {
        if (err) return res.sendStatus(403)
        req.pass = pass
        next()
    })
}

    
module.exports = router