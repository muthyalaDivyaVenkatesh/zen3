// import models here 
let  UserModel = require('../models/user');

// post
exports.addUser = (req,res,next) =>{
    console.log("we are inside post method")
    let user = new UserModel({
        Name: req.body.Name,
        Type:req.body.Type,
        Favorite: req.body.Favorite,
    })
     user.save().then((userData)=>{
         console.log(userData)
         res.status(200).json({
             "msg": "userData sucessfully saved"
         })
     })
}

// getall 

exports.getUser = (req,res,next) =>{
    console.log("we are inside the get method")
    UserModel.find().then((userData)=>{
        console.log("sucessfully get the user Data")
        res.status(200).json({userData})
    })
}

// get singleUser
exports.getSingleUser = (req,res,next) =>{
    console.log("we are inside the getSingle user method")
    const userId = req.params.id;
    console.log(userId)
    UserModel.findOne({_id:userId}).then((singleUser)=>{
        res.status(200).json({singleUser})
    })
}

//  updateuser
exports.updateUser = (req,res,next) =>{
console.log("we are inside updateUser");
let updatedObject = {
    Name:req.body.Name, 
    Type : req.body.Type,
    Favorite:  req.body.Favorite
}
UserModel.findByIdAndUpdate({_id:req.params.id},updatedObject, {new: true}).then(()=>{
    res.send("update Successfully")
})

}

//  delete User 
exports.deleteUser = (req,res,next) =>{
console.log("we are inside the delteUser Method")    
const userId = req.params.id;
UserModel.findOneAndDelete({_id:userId}).then((data)=>{
    console.log(data);
    res.status(200).send('sucessfully Deleted Data')
})
}