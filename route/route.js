const express=require("express")
const Router=express.Router()
const userModels=("../controller/usercontroller.js")
const user= ("../model/users.js")


Router.post("./creteUser",userModels.createUser);
Router.delete("./deletedata",userModels.deletedata);
Router.get("./getdata",userModels.getdata);
Router.put("./updatedata",userModels.updatedata);