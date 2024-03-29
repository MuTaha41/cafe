import { param } from "express-validator";

/**
 * Validates the restaurant ID param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:restaurantId",
 * validateRestaurantId,
 * getRestaurantData
 * );
 */
export const validateRestaurantId = param("restaurantId")
  .isNumeric()
  .withMessage("Restaurant ID must be a numeric value");

  export const validateRestaurantName = param("restaurantName")
  .isString()
  .trim() // Optional: removes any whitespace around the string
  .not().isEmpty()
  .withMessage("Restaurant name must be provided and cannot be empty");

  router.get(
    "/:restaurantId",
    validateRestaurantId,
    getRestaurantData
  );

  router.get(
    "/:restaurantName",
    validateRestaurantName,
    getRestaurantData
  );
  