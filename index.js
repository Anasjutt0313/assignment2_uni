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

});

app.post('/member', async (req, res) => {
    const data = req.body;
    const obj = await Member.create(data);
    res.json({ "message": "Member data created successfully", obj });

  
});


app.post('/transaction', async (req, res) => {
    
        const data = req.body;

        const obj = await Transaction.create(data);

        res.json({ message: "Transaction created successfully", obj });
   
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


app.listen(3000,()=>{
    console.log('server is connected')
})