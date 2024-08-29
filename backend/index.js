const express = require("express");
const {todo} = require("./db")
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
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:fale
    });
    res.json({
        msg:'todo created'
    })
    
});

app.get("/todos",async function(req,res){
     const todos = await todo.find({});
     res.json({
        todos
     });

});

app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsedPayload=markCompleted.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.send(411).json({
            msg:"not the right inputs vro...",
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },
    {
        completed:true
    });

    res.json({
        msg:'todo marked as completed'
    })



})
