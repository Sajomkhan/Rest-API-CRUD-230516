require("dotenv").config()
const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sajomkhan:MXI8FW0AjJaWdU2b@cluster0.jftiymb.mongodb.net/dashboard-1")
        console.log("db is connected");
    } catch (error) {
        console.log("db is not connected");
        console.log(error.message);
        process.exit(1)
    }
}

module.exports = connectDB