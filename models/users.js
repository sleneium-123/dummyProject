const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

let userSchema = new mongoose.Schema({
   uid:{type:Number,required:true},
   name: {type: String, required:true},
   contact:{type:Number,required:true}
});

module.exports = mongoose.model('users', userSchema);
// module.exports= async function findById(id){
//    let res=user.findById(id);
//    if(res)r
//    {
//       result=result.toJson();
//    }
// };

