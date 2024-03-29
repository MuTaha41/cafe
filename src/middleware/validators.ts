// Import the necessary modules
import { Router } from 'express';
import { param } from 'express-validator';
// Assuming getRestaurantData is in the same directory
import { getRestaurantData } from './restaurantController.js'; 

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

  