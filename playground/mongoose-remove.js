const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user')


// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

// Todo.findOneAndRemove()


Todo.findByIdAndRemove({  _id:'5a6d4e4249cc9f159407f92b'}).then((todo)=>{
  console.log(todo);
},(e)=>{
console.log(e);
})

// Todo.findOneAndRemove('5a6d4e4249cc9f159407f92b').then((todo)=>{
//   console.log(todo);
// },(e)=>{
// console.log(e);
// })
