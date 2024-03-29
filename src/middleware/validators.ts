// import { param } from "express-validator";

// /**
//  * Validates the restaurant ID param
//  * @returns {ValidationChain} - Express validator validation chain
//  * @example
//  * router.get(
//  *  "/:restaurantId",
//  * validateRestaurantId,
//  * getRestaurantData
//  * );
//  */
// export const validateRestaurantId = param("restaurantId")
//   .isNumeric()
//   .withMessage("Restaurant ID must be a numeric value");

//   export const validateRestaurantName = param("restaurantName")
//   .isString()
//   .trim() // Optional: removes any whitespace around the string
//   .not().isEmpty()
//   .withMessage("Restaurant name must be provided and cannot be empty");

//   router.get(
//     "/:restaurantId",
//     validateRestaurantId,
//     getRestaurantData
//   );

//   router.get(
//     "/:restaurantName",
//     validateRestaurantName,
//     getRestaurantData
//   );

// Import the necessary modules
import { Router } from 'express';
import { param } from 'express-validator';
// Assuming getRestaurantData is in the same directory
import { getRestaurantData } from './restaurantController'; 

// Create a new router instance
const router = Router();

/**
 * Validates the restaurant ID param
 */
export const validateRestaurantId = param('restaurantId')
  .isNumeric()
  .withMessage('Restaurant ID must be a numeric value');

/**
 * Validates the restaurant name param
 */
export const validateRestaurantName = param('restaurantName')
  .isString()
  .trim()
  .not().isEmpty()
  .withMessage('Restaurant name must be provided and cannot be empty');

// Define routes using the validation middleware and the controller function
router.get('/:restaurantId', validateRestaurantId, getRestaurantData);
router.get('/:restaurantName', validateRestaurantName, getRestaurantData);

// Export the router
export default router;

  