const express = require("express");
const router = express.Router();
const User = require("../models/User.js")
const Customer =require("../models/customer.js")
const { body, validationResult } = require('express-validator');
const Item = require("../models/Item.js");



router.post("/createcustomer", [

    //for validation using express-validator packge
    body('firstname', "Enter a valid firstname").isLength({ min: 3 }),
    body('middlename', "Enter a valid middlename").isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('lastname', "Enter a valid lastname").isLength({ min: 3 }),
    body('phoneno', "Enter a valid lastname").isMobilePhone()
], async (req, res) => {
    // console.log(req.body);
    
    console.log(req.body);
    console.log("dar");
    //destructure req.body
    const { shopkeeperid,firstname,middlename,lastname,address,city,pincode,state,country,email,phoneno } = req.body;

    //if userDetail is not follow above validation then there is an error
    const error = validationResult(req)

    if (!error.isEmpty()) {
        console.log("jmj")
        const errorMessages = error.array().map(error => error.msg);
        console.log(errorMessages)
        const message = errorMessages[0];
        return res.status(400).json({ message })
    }

    try {
        //find user with req email
        let customer = await Customer.findOne({ email: req.body.email })

        //if user exist then send bad request
        if (customer) {
            return res.status(400).json({ message: "Sorry an user with this email is already exist" })
        }

        //create user and save into DB
        customer = await Customer.create({
            shopkeeperid: shopkeeperid,
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            address: address,
            city: city,
            pincode: pincode,
            state: state,
            country: country,
            email: email,
            phoneno: phoneno
        });
        return res.status(200).json({ message: "Successfully signup" })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Internal server error" });
    }
})























router.post("/createitem", [

    //for validation using express-validator packge
    //body('', "Enter a valid firstname").isLength({ min: 3 }),
    // body('middlename', "Enter a valid middlename").isLength({ min: 3 }),
    // body('email', "Enter a valid Email").isEmail(),
    // body('lastname', "Enter a valid lastname").isLength({ min: 3 }),
    // body('phoneno', "Enter a valid lastname").isMobilePhone()
], async (req, res) => {
    // console.log(req.body);
    
    console.log(req.body);
    console.log("dar");
    //destructure req.body
    const { itemname,itemcategory,costprice,sellingprice,quantity,units } = req.body;

    //if userDetail is not follow above validation then there is an error
    // const error = validationResult(req)

    // if (!error.isEmpty()) {
    //     console.log("jmj")
    //     const errorMessages = error.array().map(error => error.msg);
    //     console.log(errorMessages)
    //     const message = errorMessages[0];
    //     return res.status(400).json({ message })
    // }

    try {
        //find user with req email
        let item = await Item.findOne({ itemname: req.body.itemname })

        //if user exist then send bad request
        if (item) {
            return res.status(400).json({ message: "Sorry an user with this email is already exist" })
        }

        //create user and save into DB
        item = await Item.create({
            itemname: itemname,
            itemcategory: itemcategory,
            costprice: costprice,
            sellingprice: sellingprice,
            quantity: quantity,
            units: units
        });
        return res.status(200).json({ message: "Successfully signup" })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = router