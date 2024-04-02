import express from "express";
import { getFoodData } from "../controllers/foodController.js";
import { validateFoodName } from "../middleware/validators.js";

// We will create a router object
const router = express.Router();

// We will create a route for the food data based on the foodType name
router.get("/:foodType", validateFoodName, getFoodData);


// We will export the router
export default router;
