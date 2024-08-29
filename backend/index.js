const express = require("express");
const { createTodo, markCompleted } = require("./types");

const app = express();


app.use(express.json());


app.post("/todo",function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"wrong inputs vro"
        })
        return;
    }
    
});

app.get("/todos",function(req,res){

});

app.put("/completed",function(req,res){
    const updatePayload=req.body;
    const parsedPayload=markCompleted.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.send(411).json({
            msg:"not the right inputs vro...",
        })
        return;
    }

})
