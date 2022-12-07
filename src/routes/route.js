const express = require('express')
const router = express.Router()
const coinController =require("../controller/coinController")

router.get('/cryptoCoins',coinController.coinFun)

router.all('/*',function(req,res){
    res.status(400).send({message:"invalid http request"})
})

module.exports =router;