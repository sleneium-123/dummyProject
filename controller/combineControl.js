const express=require('express')
const Library2 = require('../models/library');

const User2 = require('../models/users');
let methods = {};
methods.getAll = async function (req, res) {
    try{
    //     console.time('times1');
    //     let list1 = await Library2.find({});
   
    // console.timeEnd('times1');
    // console.time('times2');
    // let lists = await User2.find({});
    //console.time('times');
    let result=await Promise.all([User2.find({}),Library2.find({})])
    
    //console.timeEnd('times2');
    res.send({user:result[0],library:result[1]});
    //res.send(lists,list1);
}catch(err)
{
    console.log(err);
}

}
module.exports=methods;
