const express = require("express");
const router = express.Router();
const User = require("../models/User.js")
const Customer =require("../models/customer.js")
const { body, validationResult } = require('express-validator');
const Item = require("../models/Item.js");
 
// Update customer by ID
router.put("/update/customer/:customerId", [
  // Validations
  body('firstname', "Enter a valid firstname").isLength({ min: 3 }),
  body('middlename', "Enter a valid middlename").isLength({ min: 3 }),
  body('email', "Enter a valid Email").isEmail(),
  body('lastname', "Enter a valid lastname").isLength({ min: 3 }),
  body('phoneno', "Enter a valid phoneno").isMobilePhone(),
], async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const { firstname, middlename, lastname, address, city, pincode, state, country, email, phoneno } = req.body; // Specify the fields to be updated

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    // Find the customer by ID and update the data
    const updatedCustomer = await Customer.findByIdAndUpdate(customerId, {
      firstname,
      middlename,
      lastname,
      address,
      city,
      pincode,
      state,
      country,
      email,
      phoneno,
    }, {
      new: true, // Return the updated document
    });

    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    return res.status(200).json(updatedCustomer);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update item by ID
router.put("/update/item/:itemId", [
  // Validations
  body('itemname', "Enter a valid itemname").isLength({ min: 3 }),
  body('itemcategory', "Enter a valid itemcategory").isLength({ min: 3 }),
  body('costprice', "Enter a valid costprice").isNumeric(),
  body('sellingprice', "Enter a valid sellingprice").isNumeric(),
  body('quantity', "Enter a valid quantity").isInt(),
  body('units', "Enter a valid units").isLength({ min: 1 }),
], async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const { itemname, itemcategory, costprice, sellingprice, quantity, units } = req.body; // Specify the fields to be updated

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Find the item by ID and update the data
    const updatedItem = await Item.findByIdAndUpdate(itemId, {
      itemname,
      itemcategory,
      costprice,
      sellingprice,
      quantity,
      units,
    }, {
      new: true, // Return the updated document
    });

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    return res.status(200).json(updatedItem);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router