// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID } = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log("Unable to connect to database servers");
  }
  console.log("Successfully connected");
  // db.collection('Todos').insertOne({
  //   test:"Something to do",
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log("Unable to insert todo",err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name:"Renjith",
  //   age:20,
  //   location:"Kochi"
  // },(err,result)=>{
  //   if(err){
  //     return console.log("Unable to insert todo");
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });


  db.close();
})
