const express = require('express')
const app = express()
app.use(express.json())

app.post('data',async(req,res)=>{
    const book = req.body.book
    const memeber = req.body.memeber
    const transaction = req.body.transaction

    const ob1 = await 
})
