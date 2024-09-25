const mongoose = require('mongoose');
const model = require('../model/todoModels');
const todoModel = model.module;

const addTodo = async(req,res)=>{
    try{
        const {title,description} = req.body;
        const newEntry = new todoModel({title,description})

        const intertData = await newEntry.save();
        console.log(intertData,"intertData")
        res.status(201).json({status:'201',message:'Data saved.',data:intertData})

    }catch(err){
        res.status(400).json({status:400,message:'Something went wrong.'})
    }
}

const getTodo = async(req,res)=>{
    try{
        const todoList = await todoModel.find({},{_id:1,title:1,description:1});
        res.status(201).json({status:'201',message:'Data saved.',data:todoList})
        
    }catch(err){
        res.status(400).json({status:400,message:'Something went wrong.'})
    }
}

const updateTodo = async(req,res)=>{
    try{
        const {title,description,id} = req.body;
        const findTodo = await todoModel.findOne({_id:id});
        if(!findTodo) return res.status(400).json({status:400,error:"Provide correct details."});

        const updatedData = await todoModel.updateOne({_id:id},{title,description});
        const updated = await todoModel.findOne({_id:id},{title:1,_id:1,description:1});

        res.status(201).json({status:'201',message:'Data updated successfully.',data:updated})
    }catch(err){
        console.log(err,"error")
        res.status(400).json({status:400,message:'Something went wrong.'})
    }
}

const deleteTodo = async(req,res)=>{
    try{
        const {title,description,id} = req.body;
        const findTodo = await todoModel.findOne({_id:id});
        if(!findTodo) return res.status(400).json({status:400,error:"Provide correct details."});

        const updatedData = await todoModel.deleteOne({_id:id})

        res.status(201).json({status:'201',message:'Data deleted successfully.',data:updatedData})

    }catch(err){
        res.status(400).json({status:400,message:'Something went wrong.'})
    }
}

module.exports={
    addTodo:addTodo,
    todoList:getTodo,
    updateTodo:updateTodo,
    deleteTodo:deleteTodo
}