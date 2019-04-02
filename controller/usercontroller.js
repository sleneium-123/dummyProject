const express = require('express');

const User = require('../models/users');
let methods = {};
methods.get = async function (req, res) {
    let lists = await User.find({});
    //let lists = await Library.find({});
    res.send(lists);
}
methods.post = async function (req, res) {
    console.log("inside post")
    console.log(req.body);

    let listAdded = new User({

        name: req.body.name,
        contact: req.body.contact,
        uid: req.body.uid
    })
    try {
        let result1 = await listAdded.save();
        res.send(result1);
    } catch (err) {
        console.error(err);
    }
}
// methods.display=async function(req,res)
// { const listA=User.find((c) => { return c.uid===parseInt(req.params.uid)});
//     if(listA)res.send(listA);

//     };

methods.display = async function (req, res) {
    
    const id = req.params._id

        console.log(id);
        console.log(typeof id);

    try {
        const user = await User.findById(id)
        res.send(user);
    } catch (err) {
        console.log(err);
        res.json({status: false, message: "Some error occured"})
    }
}

methods.update = async function (req, res) {
    const id =req.params._id;
    console.log("id for udating"+id)
    const userUp = req.body;
    const { ...updateData } = userUp;
    console.log(updateData)
    try {
        let result2 = await User.findByIdAndUpdate(id, updateData, { city: "bbs" });
        res.json(result2);
        console.log("updated")
    } catch (err) {
        console.error(err);
    }
 }

methods.deleteUser = async (req, reply) => {
    const id = req.params._id
    console.log("id for deleting"+id);
  try {
    
    const result3 = await User.findByIdAndRemove(id)
    console.log("deleted")
    return result3
  } catch (err) {
    console.log(err);
}
}
module.exports = methods;
