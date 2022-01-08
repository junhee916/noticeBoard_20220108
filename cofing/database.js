const mongosoe = require('mongoose')
const connectDB = function(){
    try{
        mongosoe.connect(process.env.MONGODB_URI, {

        })
        console.log("connected mongodb...")
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}
module.exports = connectDB