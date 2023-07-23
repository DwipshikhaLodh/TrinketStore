const express = require('express')
const router = express.Router()
const Jewelry = require('../models/jewelry')

router.post('/jewelry', async (req, res) => {
    try{
        res.send("hey")
    }catch(e){
        console.log(e)
    }
})

router.get('/jewelry', async (req, res) => {
    try{
        const JewelryDB = await Jewelry.find({});
        console.log(`object from db is ${JewelryDB}`)
        res.send(JewelryDB);
    }catch(e){
        console.log(e)
    }
})

router.get('/jewelry/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const AJewelry = await Jewelry.findById({ _id : _id});
        console.log(`object from db is ${AJewelry}`)
        res.send(AJewelry);
    }catch(e){
        console.log(e)
    }
})

router.patch('/jewelry/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const AJewelry = await Jewelry.findByIdAndUpdate({ _id : _id});
        console.log(`object from db is ${AJewelry}`)
        res.send(AJewelry);
    }catch(e){
        console.log(e)
    }
})

router.delete('/jewelry/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const AJewelry = await Jewelry.findByIdAndDelete({ _id : _id});
        console.log(`object from db is ${AJewelry}`)
        res.send(AJewelry);
    }catch(e){
        console.log(e)
    }
})

module.exports = router;