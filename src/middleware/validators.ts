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

export const validatefoodTypeName = param("foodType")
  // We will use the isString method to check if the foodType param is a string
  .isString()
  // We will use the isIn method to check if the foodType param is either pizza or suzzi
  .isIn(["pizza", "suzzi"])
  // We will use the withMessage method to set a custom error message
  .withMessage("foodType name must be either pizza or suzzi");

// import { param } from "express-validator";

// export const validateFoodName = param("foodType")
//   .isString()
//   .custom((value) => ["pizza", "suzzi"].includes(value.toLowerCase()))
//   .withMessage("Food type must be either pizza or suzzi");
