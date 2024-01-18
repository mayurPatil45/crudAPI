import StudentModel from "../models/studentSchema.js";

const homeController =async(req,res)=>{
    res.render('index')
};

// create
const createController = async(req,res)=>{
    // console.log(req.body)
   const record = await StudentModel({
        name:req.body.name,
        city:req.body.city,
        email:req.body.email,
        contact:req.body.contact,
    });
    if(record){
       await record.save();
       console.log("Data saved..")

    }else{
        console.log("Data not saved!...")
    }
    res.render('index')
}

module.exports = {homeController, createController};