import { param } from "express-validator";

/**
 * Validates the drinkType name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:drinkType",
 * validateDrinkTypeName,
 * getDrinkData
 * );
 */
export const validateDrinkTypeName = param("drinkType")
  .isString().withMessage("drinkType must be a string")
  .isIn(["coffee", "tea", "smoothie", "soda"])
  .withMessage("drinkType name must be either coffee, tea, smoothie, or soda");
