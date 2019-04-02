
var express = require('express');
var router = express.Router();
// const user = require('../controller/usercontroller');
const lib=require('../controller/librarycontroller');
//const combine = require('../controller/combineControl');

// router.get('/getUser', user.get)
router.get('/libinfo', lib.get,async function(req,res){
    console.log("responding")
});
// router.get('/:_id',user.display);
// router.post('/enteruser',user.post);
// router.put('/updateUser/:_id',user.update);
// router.delete('/deleteUser/:_id',user.deleteUser)
//router.get('/getAll',combine.getAll)
// router.put('/updatelib/:_id',lib.update)
// router.post('/enterlib',lib.create)
 router.delete('/deletelib/:_id',lib.delete)
module.exports = router;