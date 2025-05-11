const mongoose = require('mongoose')
const colors = require('colors')

const connectDb = async ()=> {
    try {

        await mongoose.connect(process.env.MogoDbURL);
        console.log(`Server is running ON ${mongoose.connection.host}`.bgCyan.white);
        
    } catch (error) {
        console.log(`${error}`.bgRed);
    }
}
module.exports = connectDb;