import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { generateFoodData } from "../services/foodService.js";

export const getFoodData = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error("Validation error", errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { foodType } = req.params;
  const foodCategoryMap = {
    pizza: 'Regular', // Assume 'Regular' for pizzas
    sushi: 'Vegan',    // Assume 'Vegan' for sushis
    burger: 'Regular',  // Assume 'Regular' for burgers
    salad: 'Vegan'      // Assume 'Vegan' for salads; can also be 'Vegetarian'
  };

  try {
    const category = foodCategoryMap[foodType];
    if (!category) {
      console.error("Food type not found:", foodType);
      res.status(404).send("Food type not found: " + foodType);
      return;
    }

    const finalFoodData: FoodData = await generateFoodData(foodType, category);
    res.status(200).json(finalFoodData);
  } catch (error) {
    console.error("Error in fetching food data for", foodType, ":", error);
    res.status(500).send("Error in fetching food data");
  }
};


