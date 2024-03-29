import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { RestaurantData } from '../types/global.js';
// If validateRestaurantName is what you meant
//import { validateRestaurantName } from "../middleware/validators.js";

import { getRestaurantsByCuisine, getRestaurantById } from "../services/restaurantService.js";


export const getRestaurantData = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.error("Validation error", errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    // This could be a cuisine type, a restaurant ID, or any other parameter relevant for fetching restaurant data
    const { param } = req.params;

    let finalRestaurantData: RestaurantData; // Ensure RestaurantData is defined and imported

    // Example logic to fetch restaurant data based on the parameter
    if (param) {
      // The logic here will depend on how your restaurant data is structured and how you want to fetch it
      // If 'param' represents a cuisine, fetch by cuisine
      finalRestaurantData = await getRestaurantsByCuisine(param);
    } else {
      // If 'param' represents an ID, fetch a specific restaurant
      finalRestaurantData = await getRestaurantById(param);
    }

    res.status(200).json(finalRestaurantData);
  } catch (error) {
    console.error("Error in fetching restaurant data", error);
    res.status(500).send("Error in fetching restaurant data");
  }
};
