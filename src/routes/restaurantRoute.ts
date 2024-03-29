import express from "express";
import { getRestaurantData } from "../controllers/restaurantController"; // To be created
import { validateRestaurantParam } from "../middleware/validators"; // To be created or updated

const router = express.Router();

// Define a route for getting restaurant data, adjust as per your actual API design
router.get("/:restaurantParam", validateRestaurantParam, getRestaurantData);

export default router;
