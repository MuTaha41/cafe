import express from 'express';

// Assuming the function is exported from the module correctly
import { generateRandomRestaurantData } from '../services/restaurantService.js';

const router = express.Router();
router.get('/randomRestaurant', (_req, res) => {
  const data = generateRandomRestaurantData();
  res.json(data);
});

export default router;
