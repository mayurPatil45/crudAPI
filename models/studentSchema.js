const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
    'name':{
        type:String,
        require:true,
    },
    'city':{
        type:String,
        require:true,
    },
    'email':{
        type:String,
        require:true,
    },
    'contact':{
        type:String,
        require:true,
    }
});
const StudentModel = new mongoose.model('crud', StudentSchema);
module.exports = StudentModel;