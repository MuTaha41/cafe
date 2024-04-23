import express from "express";
import { getDrinkData } from "../controllers/drinkController.js"; // Updated to use drinkController
import { validateDrinkTypeName } from "../middleware/validators.js";  // Updated the function name for drink type validation

// Create a router object
const router = express.Router();

// Create a route for the drink data based on the drinkType name
router.get("/:drinkType", validateDrinkTypeName, getDrinkData);

// Export the router
export default router;
