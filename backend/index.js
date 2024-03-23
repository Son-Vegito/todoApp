const express=require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app=express();
const cors= require('cors');

app.use(express.json());
app.use(cors());

app.post('/todo',async (req,res)=>{
    const payload=req.body;
    const parsePayload=createTodo.safeParse(payload);
    if(!parsePayload.success){
        return res.status(411).send("You sent the wrong inputs")
    }
    await todo.create({
        title:payload.title,
        description:payload.description
    })  
    res.send("Todo created");
})

app.get('/todo',async(req,res)=>{
    const todos=await todo.find();
    return res.json(todos)
})

app.put('/completed',async(req,res)=>{
    const payload=req.body;
    const parsePayload=updateTodo.safeParse(payload);
    if(!parsePayload.success){
        return req.status(411).send("You sent the wrong inputs");
    }

    await todo.findOneAndUpdate({
        _id:req.body.id
    },{
        completed:true
    })
    res.send("Todo marked as updated")
})

app.listen(3000,()=>console.log('Server is live at PORT 3000'));