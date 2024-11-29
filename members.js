const mongoose = require('mongoose')

const {Schema} = require('mongoose')

const memberSchema = new Schema({
    name:String,
    membershipNumber:String,
    email:String,
    membershipType:String,
    contactNumber:Number,
})

const Member = mongoose.model('member',memberSchema)

module.exports = Member;