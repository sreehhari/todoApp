const mongoose = require('mongoose');


mongoose.connect(import.meta.env.VITE_MONGO_URI);

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo:todo
}
