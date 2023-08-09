const express=require("express");
const mongoose=require("mongoose");

const app=express();
app.use("/",express.Router);


mongoose.connect(
    "mongodb+srv://biplavmandalmandal:Biplav8250@cluster0.bfitohc.mongodb.net/users?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
    }
).then(() => console.log("MongoDb is connected"))
.catch((err) => console.log(err))






app.listen(process.env.PORT || 3000, function () {
    console.log("Express app running on port " + (process.env.PORT || 3000))});
