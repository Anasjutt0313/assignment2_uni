const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/libraray')
.then(()=>console.log('MongoDB is connected'))
.catch((err)=>console.log(err))

module.exports=mongoose;
