const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Book = require('./book')
const Member = require('./members')
const Transaction = require('./transaction')
const db = require('./db')

app.use(express.json())

app.post('/book', async (req, res) => {
    const data = req.body;
    const obj = await Book.create(data);
    res.json({ "message": "Book data created successfully", obj });

    // After creating the book, you can access the _id like this:
    const bookId = obj._id;  // This gives you the newly created book's ID

    // If you're using Postman (pm), you can set it to the environment as:
    pm.environment.set("bookId", bookId);
});

app.post('/member', async (req, res) => {
    const data = req.body;
    const obj = await Member.create(data);
    res.json({ "message": "Member data created successfully", obj });

    // Correcting the way to store memberId
    const memberId = obj._id;  // This gives you the member's ID
    pm.environment.set("memberId", memberId);
});


app.post('/transaction', async (req, res) => {
    const data = req.body;
    // const { bookId, memberId } = data; // Assuming you're sending these as part of the request body

    // Check if bookId and memberId exist in the request body
    // if (!bookId || !memberId) {
    //     return res.status(400).json({ message: "bookId and memberId are required" });
    // }

    // Create the transaction
    const obj = await Transaction.create(data);

    // Respond with the created transaction object
    res.json({ "message": "Transaction created successfully", obj });
});


app.get('/showbooks',async(req,res)=>{
    const obj = await Book.find({})
    res.json(obj)
})

app.get('/showmembers',async(req,res)=>{
    const obj = await Member.find({})
    res.json(obj)
})

app.get('/showtransactions',async(req,res)=>{
    const obj = await Transaction.find({})
    res.json(obj)
})






app.listen(4000,()=>{
    console.log('server is connected')
})