const express = require("express")
const connectToMongo = require("./db.js")
connectToMongo();
const auth = require("./routes/auth.js");
const add = require("./routes/add.js")
const cors = require("cors")


const app = express();
const port = 4000;

//to get data from the client we need to make a cors beetween two
app.use(cors())

//to send some information to server
app.use(express.json());
 
//Available Routes
app.use("/auth", auth);
app.use("/add", add);


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
