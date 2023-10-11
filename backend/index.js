const express = require("express")
const connectToMongo = require("./db.js")
connectToMongo();
const update = require("./routes/update.js");
const auth = require("./routes/auth.js");
const add = require("./routes/add.js");
const Delete = require("./routes/delete.js");
const cors = require("cors")

const app = express();
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session)
const mongoURI = "mongodb+srv://mongodbatlas:mongodbatlas1234@cluster0.69lknpi.mongodb.net/AgroBook?retryWrites=true&w=majority"
const UserModel = require("./models/User.js");
const bcryptjs = require("bcryptjs")
const port = 4000;

const store = new MongoDBSession({
    uri: mongoURI,
    collection: "mySessions"
});

//to get data from the client we need to make a cors beetween two
app.use(cors())

// this is the code for the sessions..
app.use(
    session({
        secret: '',
        resave: false,
        saveUninitialized: false,
        store:store
    }));

// Middleware Section 

const isAuth = (req,res,next) => {
    if(req.session.isAuth){
        next()
    }
    else{
        res.redirect("/login")
    }

}


app.post("/signup",async (req,res) => {
    const {name,email,password} = req.body

    let user = await UserModel.findOne({email})

    if (user){
        res.redirect("/")
    }

    const hashedpwd = await bcrypt.hash(password,12)

    user = new UserModel({
        name,
        email,
        password:hashedpwd
    });

    await user.save();

    res.redirect("/")

})
app.post("/login",async(req,res)=>{
    const {email,password} = req.body

    const user = await UserModel.findOne({email})

    if(!user){
        return res.redirect("/login");
    }
    const isMatch = await bcrypt.compare(password,user.password);

    if (!isMatch){
        return res.redirect("/login")
    }

    req.session.isAuth = true; 
    res.redirect("/dashboard")

});


app.get("/", (req, res) => {
    res.send("Hello Sessions");
})

//to send some information to server
app.use(express.json());

//Available Routes
app.use("/auth", auth);
app.use("/add", add);
app.use("/update", update);
app.use("/delete", Delete);


app.get("/dashboard",isAuth,(req,res)=>{
    res.render("dashboard")
});

app.post("/logout",(req,res) => {
    req.session.destroy((err) => {
        if(err) throw err;
        res.clearCookie("session-id");
        res.send("Logged out successfully");
    })
});


app.listen(port, (err) => {
    console.log(`Server Running on port ${port}`)
});
// const express = require('express');
// const mongoose = require('mongoose'); // Import mongoose
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.json());

// // Define the Customer model
// const customerSchema = new mongoose.Schema({
//   date: Date,
//   firstName: String,
//   middleName: String,
//   lastName: String,
//   address: {
//     city: String,
//     pincode: String,
//     state: String,
//     country: String,
//   },
//   phone: String,
//   email: String,
// });

// const Customer = mongoose.model('Customer', customerSchema);

// API to add a customer
// app.post('/api/add-customer', async (req, res) => {
//   try {
//     const customerData = req.body;
//     const customer = new Customer(customerData);
//     await customer.save();
//     res.status(201).json({ message: 'Customer added successfully' });
//   } catch (error) {
//     console.error('Error adding customer:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });