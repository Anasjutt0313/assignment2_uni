const {Schema, default: mongoose} = require('mongoose')

const transactinSchema = new Schema({
    
    transactionId:String,
    bookId:String,  // Replace with actual book ID after saving
    memberId:String,  // Replace with actual member ID after saving
    issueDate:Number,
    returnDate:Number,
    status:String

})

const transaction = mongoose.model('book',transactinSchema)

module.exports = transaction;