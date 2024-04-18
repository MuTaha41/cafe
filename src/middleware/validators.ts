import { param } from "express-validator";

/**
 * Validates the foodType name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:foodType",
 * validateFoodTypeName,
 * getFoodData
 * );
 */
export const validateFoodTypeName = param("foodType")
  .isString().withMessage("foodType must be a string")
  .isIn(["pizza", "sushi", "burger", "salad"])
  .withMessage("foodType name must be either pizza, sushi, burger, or salad");

// export const validatefoodTypeName = param("foodType")
//   // We will use the isString method to check if the foodType param is a string
//   .isString()
//   // We will use the isIn method to check if the foodType param is either pizza or suzzi
//   .isIn(["pizza", "suzzi"])
//   // We will use the withMessage method to set a custom error message
//   .withMessage("foodType name must be either pizza or suzzi");

