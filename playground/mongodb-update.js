const {MongoClient,ObjectID } = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log("Unable to connect to database servers");
  }
  console.log("Successfully connected");

  // db.collection("Todos").findOneAndUpdate({
  //   _id: new ObjectID("5a6b77f84aba2e3d6c972fff")
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //     returnOriginal:false
  // }).then((result)=>{
  //   console.log(result);
  // })

  db.collection("Users").findOneAndUpdate({
    name:"Messi"
  },{
    $inc:{
      age:-5
    },
    $set:{
      location:"Barcelona"
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  })

  db.close();
})
