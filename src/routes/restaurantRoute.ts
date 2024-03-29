// import express from 'express';

// import { generateRandomRestaurantData } from '../services/restaurantService.ts';

// const router = express.Router();

// router.get('/randomRestaurant', (req, res) => {
//   const data = generateRandomRestaurantData();
//   res.json(data);
// });

// export default router;

import express from 'express';

// Assuming the function is exported from the module correctly
import { generateRandomRestaurantData } from '../services/restaurantService';

const router = express.Router();

router.get('/randomRestaurant', (_req, res) => {
  const data = generateRandomRestaurantData();
  res.json(data);
});

export default router;


