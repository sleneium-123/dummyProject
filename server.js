const express=require('express');
const app=express();
console.log("working");
// const mongoose = require('mongoose');
const dbase=require('./config/dbase');

const bodyparser=require('body-parser');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use('/', require('./routes/index1'));

 const port=process.env.PORT||3005;
app.listen(port, function() { 
  console.log(`listening on port ${port}`);
   dbase.init();
});