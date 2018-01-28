var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash')

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

const port = process.env.PORT || 3000;

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

app.get('/todos/:id',(req,res)=>{
  if(!ObjectID.isValid(req.params.id)){
    console.log(req.params.id);
    return res.status(400).send("Please send a good request")
  }
  Todo.findById(req.params.id).then((todo)=>{
    if(!todo){
      return res.status(404).send("");
    }
    res.send(todo);
  },(e)=>{
    console.log("Error occured");
  })
})

app.delete('/todos/:id',(req,res)=>{
  console.log(req.params.id);
  if(!ObjectID.isValid(req.params.id)){
    console.log(req.params.id);
    return res.status(400).send("Please send a good request")
  }
  Todo.findByIdAndRemove(req.params.id).then((todo)=>{
    if(!todo){
      return res.status(404).send("NO such todo exists")
      console.log("No Such todo exist");
    }
    res.send(todo);
    console.log(todo);
  },(e)=>{
  console.log(e);
  })
})

app.patch('/todos/:id',(req,res)=>{
  var id = req.params.id;
  var body = _.pick(req.body, ['test','completed']);

  if(!ObjectID.isValid(req.params.id)){
    console.log(req.params.id);
    return res.status(400).send("Please send a good request")
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo) =>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  })
});




app.listen(port,()=>{
  console.log(`Started on port ${port}`);
})

module.exports = {
  app
}
