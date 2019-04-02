const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

let libSchema = new mongoose.Schema({
    bookNo: {type: Number, required:true},
    bookname: {type: String, required:true},
    author: { type:String,required:true },
    
});

module.exports = mongoose.model('librarys', libSchema);

