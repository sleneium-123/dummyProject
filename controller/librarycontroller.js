const express = require('express');

let Library = require ('../models/library');
let methods = {};
methods.get = async function(req,res,fnext){
    let listslib = await Library.find({})
    //console.log("response send by next fuction");
    res.send(listslib)
    next()
}
methods.create= async function(req,res)
{
    console.log(req.body)
    let listAd = new Library({bookNo:req.body.bookNo,
    bookname:req.body.bookname,
    author:req.body.author})
    try{
        let resu=await listAd.save()
        res.send(resu)
    }catch(err)
    {
        console.log(err)
    }
}
methods.update=async function(req,res)
{
    const listNew=req.body;
    const id=req.params._id;
    try{
    let resultup=await Library.findByIdAndUpdate(id,listNew);
    res.send(resultup);
    }catch(err)
    {
        console.log(err);
    }
}
methods.delete=async function(req,res)
{
    let bno=req.param._id;
    try{
        let ress=await Library.findByIdAndRemove(bno)
        
        res.send("deleted")
    }catch(error)
    {
    res.json({status:false,message:"some error occured"})
}
}

module.exports=methods;