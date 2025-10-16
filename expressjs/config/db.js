const mongoose = require("mongoose");

const connectDb = async ()=>{
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/technotr1");
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;