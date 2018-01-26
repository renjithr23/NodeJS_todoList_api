// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID } = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log("Unable to connect to database servers");
  }
  console.log("Successfully connected");
   // db.collection('Todos').find({
   //   _id:new ObjectID('5a6b3469266bfb1d2cdfc04e'),
   // }).toArray().then((docs)=>{
   //   console.log("Todos");
   //   console.log(JSON.stringify(docs,undefined,2));
   // },(err)=>{
   //   console.log("Unable to return the todos list",err);
   // })
   // db.collection('Todos').find().count().then((count)=>{
   //   console.log(`Todos count:${count}`);
   // //   console.log(JSON.stringify(docs,undefined,2));
   // },(err)=>{
   //   console.log("Unable to return the todos list",err);
   // })
   db.collection('Users').find({
     name:"Renjith"
   }).toArray().then((docs)=>{
     console.log("Todos");
     console.log(JSON.stringify(docs,undefined,2));
   },(err)=>{
     console.log("Unable to return the todos list",err);
   })

  db.close();
})
