const express = require("express");
const {Todo} = require("./db")
const { createTodo, markCompleted } = require("./types");

const app = express();


app.use(express.json());


app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"wrong inputs vro"
        })
        return;
    }
    await Todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    });
    res.json({
        msg:'todo created'
    })
    
});

app.get("/todos",async function(req,res){
     const todos = await Todo.find({});
     res.json({
        todos
     });

});

app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsedPayload=markCompleted.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"not the right inputs vro...",
        })
        return;
    }
    await Todo.update({
        _id:req.body.id
    },
    {
        completed:true
    });

    res.json({
        msg:'todo marked as completed'
    })



})


app.listen(3000);