import { Request, Response } from "express";
import {
  generatePizzaData,
  generateSushiData,
  
} from "../services/foodService.js"; // This should be your new service file
import { validationResult } from "express-validator";

import { FoodData } from '../types/types.js';


/**
 * Gets the food data for a type
 * @param req the request object
 * @param res the response object
 */
export const getFoodData = async (req: Request, res: Response) => {
  // ... rest of the code remains unchanged ...

  try {
    // Get the type param from the request
    const { type } = req.params; // assuming you have a route param named 'type'

    // We will create a variable with a type of FoodData
    let finalFoodData: FoodData; // FoodData is a new type that you need to define

    // We will use an if statement to check which type of food was passed in
    if (type === "pizza") {
      finalFoodData = generatePizzaData();
    } else if (type === "sushi") {
      finalFoodData = generateSushiData();
    } else {
      // If the type is not recognized, we will throw an error
      res.status(404).send("Food type not found");
    }

    // We will return the food data as JSON
    res.status(200).json(finalFoodData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in fetching food data");
  }
};
