import express from "express";
import { getFoodData } from "../controllers/foodController.js";
import { validateFoodName } from "../middleware/validators.js";

// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:foodType", validateFoodName, getFoodData);


// We will export the router
export default router;
