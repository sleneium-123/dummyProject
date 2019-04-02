const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

async function init(){
    try{
      let db = await mongoose.connect('mongodb://localhost:27017/myDB', {useNewUrlParser: true});
      //console.log('db ::', db);
    } catch(err){
      console.log('db error');
    }
}
module.exports  = { init };
