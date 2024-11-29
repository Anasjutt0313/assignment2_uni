const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const transactinSchema = new Schema({
    
    transactionId:String,
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: false },
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: false },
    issueDate:String,
    returnDate:String,
    status:String

})

const Transaction = mongoose.model('transaction',transactinSchema)

module.exports = Transaction;