const mongoose = require('mongoose');
const workerRegistration = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    experience:{
        type: Number,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    contactNumber:{
        type: Number,
        required: true
    },
    charges:{
        type: String,
        required: true
    },
})


const sellerRegistration = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    experience:{
        type: Number,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    contactNumber:{
        type: Number,
        required: true
    },
    charges:{
        type: String,
        required: true
    },
})

const worker = mongoose.model('workers', workerRegistration);
const seller = mongoose.model('sellers', sellerRegistration);
module.exports = {
    worker,
    seller
}