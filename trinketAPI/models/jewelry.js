const mongoose = require('mongoose')

const JewelrySchema = new mongoose.Schema({
    category : {
        type : String,
        require : true
    },
    name : {
        type : String,
        require : true
    }, 
    price : {
        type : Number,
        require : true
    },
    desc : {
        type : String,
        require : true
    },
    image : {
        type: Array,
        require : true
    },
    color : {
        type : Array,
        require : true
    },
    rating: {
        type : Number,
        require: true
    },
    stock : {
        type : Number,
        require : true
    },
    shipping : {
        type : Boolean
    },
    review : {
        type : Number,
        require : true
    }
})

module.exports = new mongoose.model('Jewelry', JewelrySchema)