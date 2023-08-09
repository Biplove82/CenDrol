const user=require("../model/users");
const useeModel=require("../model/users");

let createUser = async function(req, res){
    let data=req.body
    let saveddata=await userModels.create(data)
    res.send({msg:saveddata})
}


let getdata=async function(req, res){
    let userss=req.body
    let userdata=await userModels.find(userss)
    res.send({msg:userdata})
}

let updatedata=async function(req, res){

    let userId=req.body

    let updateUsers= await userModels.findOneAndUpdate({id:userId}, userData,{new:True})
    res.send({status:Updatedata,data:updateUsers})
}
let deletedata=async function(req, res){
    let userId = req.params.userId

    let delet=  await userModel.find({id:userId},{$set:{isdeleted:true}})

    res.send({msg:delet})}

    module.exports.createUser=createUser
    module.exports.deletedata=deletedata
    module.exports.updatedata=updatedata
    module.exports.getdata=getdata