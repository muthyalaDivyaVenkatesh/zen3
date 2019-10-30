const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const  userSchema =  new Schema ({
    Name: {
        type:String,
        required:false
    },
    Type: {
        type: String,
        required: true
    },
    Favorite : {
        type:String,
        required: false
    }
})

module.exports = mongoose.model("userData", userSchema)
