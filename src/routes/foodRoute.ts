// import express from "express";
// import { getFoodData } from "../controllers/foodController.js";
// import { validateFoodName } from "../middleware/validators.js";

// // We will create a router object
// const router = express.Router();

// // We will create a route for the food data based on the foodType name
// router.get("/:foodType", validateFoodName, getFoodData);


// // We will export the router
// export default router;

const express = require('express');
const router = express.Router();
const { getFoodData } = require('../controllers/foodController');
const { validateFoodName } = require('../validators/foodValidator');

// Define the route for getting food data, applying the validateFoodName middleware
router.get('/:foodType', validateFoodName, getFoodData);

module.exports = router;

