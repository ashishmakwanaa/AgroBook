const express = require("express");
const router = express.Router();
const User = require("../models/User.js")
const Customer =require("../models/customer.js")
const { body, validationResult } = require('express-validator');
const Item = require("../models/Item.js");








module.exports = router