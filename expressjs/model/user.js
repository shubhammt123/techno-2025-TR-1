const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
    },
    email : {
        type : String,
        required  : true
    },
    password : {
        type : String,
        required : true
    },
    contactNo : {
        type : String,
        require : true
    },
    role : {
        type : String,
        default : "USER",
        enum : ["USER","SELLER","ADMIN"]
    }
});


module.exports = mongoose.model("User",userSchema);