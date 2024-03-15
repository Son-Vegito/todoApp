const mongoose = require("mongoose")

// mongodb+srv://admin:admin@cluster0.1lyghhg.mongodb.net/todos

mongoose.connect("mongodb+srv://admin:admin@cluster0.1lyghhg.mongodb.net/todos")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false,
    }
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}
