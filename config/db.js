const mongooes = require('mongoose');

mongooes.connect('mongodb://127.0.0.1:27017/todoApp',{})
.catch(error=>console.log("Error",error))
.then(()=>console.log('Database connected successfully.'))