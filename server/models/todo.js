var mongoose = require('mongoose');


var Todo = mongoose.model('Todo',{
  text:{
    type:String,
    required:true,
    minlength:1,//Checks the minimum length of the string
    trim:true //removes leading or trailing spaces
  },
  completed: {
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});

module.exports = {
  Todo
}
