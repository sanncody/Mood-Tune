const mongoose = require("mongoose");
const config = require("../config/config");

async function connectToDB() {
    try {
        mongoose.connection.on('connected', () => {
            console.log("Connected to DB successfully ✅");
        });

        mongoose.connection.on('error', (err) => {
            console.log("Error connecting to Database❌", err);
        });

        await mongoose.connect(config.mongoDBUri);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToDB;