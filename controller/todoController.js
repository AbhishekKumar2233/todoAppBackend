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

module.exports={
    addTodo:addTodo
}