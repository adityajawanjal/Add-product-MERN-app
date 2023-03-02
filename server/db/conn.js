const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
const MONGO_URI = "mongodb://localhost:27017/E-Commerce"
const connectDB = async() =>{
    try {
        await mongoose.connect(MONGO_URI , {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("DB Connected ...");
    } catch (err) {
        console.log(`The error in connectDB is : ${err}`);
    }
}
module.exports = connectDB;