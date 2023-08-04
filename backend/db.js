const mongoose = require("mongoose")
const mongoURI = "mongodb://localhost:27017/Agrobook"
const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => { console.log("Connct to Mongo Successfully") })
        .catch((err) => { console.log(err) })
}
module.exports = connectToMongo;