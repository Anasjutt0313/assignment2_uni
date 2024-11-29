const {Schema, default: mongoose} = require('mongoose')

const memberSchema = new Schema({
    name:String,
    membershipNumber:String,
    email:String,
    membershipType:String,
    contactNumber:Number,
})

const member = mongoose.model('book',memberSchema)

module.exports = member;