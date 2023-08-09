const mongoose=require("mongoose");
const userschema=new mongoose.Schema({

    Name: String,
    Email: String,
    Password:{type:String,require:true},
    mobileNo:Number,
    

},{ timestamps: true });


module.exports=mongoose.model("newUser",userschema);