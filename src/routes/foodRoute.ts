import express from "express";
import { getFoodData } from "../controllers/foodController.js";
import { validateFoodTypeName } from "../middleware/validators.js";  // Corrected the function name here

// Create a router object
const router = express.Router();

// Create a route for the food data based on the foodType name
router.get("/:foodType", validateFoodTypeName, getFoodData);

// Export the router
export default router;

