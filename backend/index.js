const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoModel=require('./Models/Todo')
const dotenv=require('dotenv')

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.VITE_MONGO_URI)
app.listen(3001,()=>{
    console.log("running successfully")
})

app.post('/add',(req,res)=>{
    const task = req.body.task;
    todoModel.create({
        task:task

    }).then(result=>res.json(result))
    .catch(err=>res.json(err))
})
