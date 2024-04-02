import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { generatePizzaFoodData, generateSuzziFoodData } from "../services/foodService.js";


export const getFoodData = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { foodType } = req.params;
    let finalFoodData;

    switch (foodType) {
      case "Pizza":
        finalFoodData = generatePizzaFoodData();
        break;
      case "Suzzi":
        finalFoodData = generateSuzziFoodData();
        break;
      default:
        return res.status(400).json({
          errors: [
            {
              type: "field",
              value: foodType,
              msg: "Food type must be either Pizza or Suzzi",
              path: "foodType",
              location: "params"
            }
          ]
        });
    }

    res.status(200).json(finalFoodData);
  } catch (error) {
    console.error("Error in fetching food data", error);
    res.status(500).send("Error in fetching food data");
  }
};

