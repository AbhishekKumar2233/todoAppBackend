require('./config/db')
const express = require('express');
const cors = require('cors')
const todoRoute = require('./routes/todoRoute')
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/todo',todoRoute);



app.get('/',(req,res)=>{
    res.json('This is my first api');
})

app.get('/message',(req,res)=>{
    res.json({message:'This is my first api'});
})

var server = app.listen(4001, "::", function () {
    var host = server.address().address
    var port = server.address().port
 
    console.log("Example app listening at http://%s:%s", host, port)
})
 
