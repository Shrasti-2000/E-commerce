const {mongoose} = require('mongoose')
const colors = require('colors')

 const connectDB = async(req , res) => {
    try {
        const conn = await  mongoose.connect(process.env.MONGO_URL)
        console.log(`DB CONNECTION SUCCESS:${conn.connection.name}`.bgCyan.white)
    } catch (error) {
        console.log(`DB CONNECTION FAILED:${error.message}`.bgRed.white)
    }
 }

 module.exports = connectDB