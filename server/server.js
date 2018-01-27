var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  console.log(req.body);
  var todo = new Todo(req.body);
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
},(error)=>{
  console.log("Error Happened");
});


app.get('/todos',(req,res)=>{
  console.log("Request for all todos recieved");
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.statsu(400).send(e);
  })
})


app.listen(3000,()=>{
  console.log("Started on port 3000");
})

module.exports = {
  app
}
