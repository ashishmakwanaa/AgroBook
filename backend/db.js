const mongoose = require("mongoose")
const mongoURI = "mongodb+srv://mongodbatlas:mongodbatlas1234@cluster0.69lknpi.mongodb.net/AgroBook?retryWrites=true&w=majority"
const connectToMongo = () => {
    mongoose.connect(mongoURI,{
        useNewUrlParser:true,
        // useCreateIndex:true,
        useUnifiedTopology:true
        // useFindAndModify:false 
    }).then(() => { console.log("Connct to Mongo Successfully") })
        .catch((err) => { console.log(err) })
}
module.exports = connectToMongo;