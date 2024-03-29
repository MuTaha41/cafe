import express from 'express';

import { generateRandomRestaurantData } from '../services/restaurantService.ts';

const router = express.Router();

router.get('/randomRestaurant', (req, res) => {
  const data = generateRandomRestaurantData();
  res.json(data);
});

export default router;

