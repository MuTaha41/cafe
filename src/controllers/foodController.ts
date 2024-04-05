import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { generatePizzaFoodData, generateSuzziFoodData } from "../services/foodService.js";


// export const getFoodData = async (req: Request, res: Response) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     const { foodType } = req.params;
//     let finalFoodData;

//     switch (foodType) {
//       case "Pizza":
//         finalFoodData = generatePizzaFoodData();
//         break;
//       case "Suzzi":
//         finalFoodData = generateSuzziFoodData();
//         break;
//       default:
//         return res.status(400).json({
//           errors: [
//             {
//               type: "field",
//               value: foodType,
//               msg: "Food type must be either Pizza or Suzzi",
//               path: "foodType",
//               location: "params"
//             }
//           ]
//         });
//     }

//     res.status(200).json(finalFoodData);
//   } catch (error) {
//     console.error("Error in fetching food data", error);
//     res.status(500).send("Error in fetching food data");
//   }
// };

export const getFoodData = async (req: Request, res: Response) => {
  // We will use the validationResult function to check if there are any validation errors
  const errors = validationResult(req);

  // If there are validation errors, we will log them and send a 400 status code
  if (!errors.isEmpty()) {
    console.error("Validation error", errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  // We will use a try catch block to catch any errors
  try {
    // Get the foodType param from the request
    const { foodType } = req.params;
    console.log(foodType);

    // We will create a variable with a type of foodData
    let finalFoodData: FoodData;

    // We will use an if statement to check which foodType was passed in
    if (foodType === "pizza") {
      console.log(generatePizzaFoodData());
      finalFoodData = generatePizzaFoodData();
    } else if (foodType === "suzzi") {
      finalFoodData = generateSuzziFoodData();
    } else {
      // If the foodType is not pizza or suzzi, we will throw an error
      res.status(404).send("foodType not found");
    }

    // We will return the food data as JSON
    res.status(200).json(finalFoodData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in fetching food data");
  }
};


