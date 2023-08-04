const express = require("express");
const router = express.Router();
const User = require("../models/User.js")
const { body, validationResult } = require('express-validator');


//Create a User and store in database using :POST "/auth/createuser". it Does Not require authentication
router.post("/createuser", [

    //for validation using express-validator packge
    body('name', "Enter a valid name").isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body("password", "Password length must be atlist six character").isLength({ min: 6 })

], async (req, res) => {
    console.log(req.body);

    //destructure req.body
    const { name, email, password } = req.body;
    console.log(name)
    console.log(email)
    console.log(password)

    //if userDetail is not follow above validation then there is an error
    const error = validationResult(req)

    if (!error.isEmpty()) {
        // console.log("jmj")
        const errorMessages = error.array().map(error => error.msg);
        const message = errorMessages[0];
        return res.status(400).json({ message })
    }

    try {
        //find user with req email
        let user = await User.findOne({ email: req.body.email })

        //if user exist then send bad request
        if (user) {
            return res.status(400).json({ message: "Sorry an user with this email is already exist" })
        }

        //create user and save into DB
        user = await User.create({
            name: name,
            password: password,
            email: email
        })
        res.status(200).json({ message: "Successfully signup" })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = router