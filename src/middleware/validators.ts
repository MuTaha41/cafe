import { param } from "express-validator";

/**
 * Validates the pizza type param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:pizzaType",
 * validatePizzaType,
 * getFoodData
 * );
 */
export const validatePizzaType = param("pizzaType")
  // We will use the isString method to check if the pizzaType param is a string
  .isString()
  // We will use the isIn method to check if the pizzaType param is within our defined types
  .isIn(["margherita", "pepperoni", "hawaiian", "veggie"])
  // We will use the withMessage method to set a custom error message
  .withMessage("Pizza type must be one of margherita, pepperoni, hawaiian, or veggie");
