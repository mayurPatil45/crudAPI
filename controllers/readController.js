const StudentModel  = require("../models/studentSchema.js");

const readController = async(req,res)=>{
    try {
     const  records =  await StudentModel.find({})
       if(records){
        res.render('read',{'records':records})
       }else{
        res.render('read')
       } 
    } catch (error) {
       console.log(error.message) 
    }
}



module.exports = {readController}