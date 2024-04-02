import express from "express";
import { getFoodData } from "../controllers/foodController.js"; // Updated import
import { validateFoodType } from "../middleware/validators.js"; // Updated import

// We will create a router object
const router = express.Router();

// We will create a route for the food data based on the food type
router.get("/:foodType", validateFoodType, getFoodData); // Updated route

// We will export the router
export default router;
