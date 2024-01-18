const mongoose = require('mongoose');

const connectDB = async()=>{
    const connect = await mongoose.connect('mongodb://localhost:27017/crud');
    if(!connect){
        console.log("Error in connecting with database");
    }
    else {
        console.log("Database connected successfully");
    }
}

module.exports = connectDB;