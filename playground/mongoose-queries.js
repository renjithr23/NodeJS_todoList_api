const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user')


var id = '5a6c12d047b6c2f02f9c20d6';


if(!ObjectID.isValid(id)){
  console.log("ID is not valid");
}

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos',todos);
// },(e)=>{
//   console.log(e);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos',todos);
// },(e)=>{
//   console.log(e);
// });

// Todo.findById(id).then((todos)=>{
//   if(!todos){
//     return console.log("ID not found");
//   }
//   console.log('Todos',todos);
// },(e)=>{
//   console.log(e);
// }).catch((e)=>console.log(e));

user.findById(id).then((users)=>{
  if(!users){
    return console.log("Email not found");
  }
  console.log('users',users);
},(e)=>{
  console.log(e);
}).catch((e)=>console.log(e));
