import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { generateDrinkData } from "../services/drinkService.js"; // Updated to use drinkService

export const getDrinkData = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error("Validation error", errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { drinkType } = req.params;
  const drinkCategoryMap = {
    coffee: 'Coffee', // Assume 'Coffee' for coffee drinks
    tea: 'Tea',       // Assume 'Tea' for tea drinks
    smoothie: 'Smoothie', // Assume 'Smoothie' for smoothies
    soda: 'Soda'      // Assume 'Soda' for sodas
  };

  try {
    const category = drinkCategoryMap[drinkType];
    if (!category) {
      console.error("Drink type not found:", drinkType);
      res.status(404).send("Drink type not found: " + drinkType);
      return;
    }

    const finalDrinkData = await generateDrinkData(drinkType, category);
    res.status(200).json(finalDrinkData);
  } catch (error) {
    console.error("Error in fetching drink data for", drinkType, ":", error);
    res.status(500).send("Error in fetching drink data");
  }
};
