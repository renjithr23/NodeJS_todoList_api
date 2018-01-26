const {MongoClient,ObjectID } = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log("Unable to connect to database servers");
  }
  console.log("Successfully connected");


  // deleteMany function
  // db.collection('Todos').deleteMany({test:"Eat Lunch"}).then((result)=>{
  //   console.log(result);
  // })

  // deleteOne

  // db.collection('Todos').deleteOne({test:"Eat Lucnch"}).then((result)=>{
  //   console.log(result);
  // })

  // findOneAndDelete

  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // })

// db.collection('Users').deleteMany({name:"Renjith"}).then((result)=>{
//   console.log(result);
// })
db.collection('Users').findOneAndDelete({_id:new ObjectID('5a6b79c94aba2e3d6c9730ee')}).then((result)=>{
  console.log(result);
})


  db.close();
})
