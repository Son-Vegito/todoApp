const express=require('express');
const { createTodo, updateTodo } = require('./types');
const app=express();

app.use(express.json());

app.post('/todo',(req,res)=>{
    const payload=req.body;
    const parsePayload=createTodo.safeParse(payload);
    if(!parsePayload.success){
        return res.status(411).send("You sent the wrong inputs")
    }

})

app.get('/todo',(req,res)=>{

})

app.put('/completed',(req,res)=>{
    const payload=req.body;
    const parsePayload=updateTodo.safeParse(payload);
    if(!parsePayload.success){
        return req.status(411).send("You sent the wrong inputs");
    }
})

app.listen(3000,()=>console.log('Server is live at PORT 3000'));