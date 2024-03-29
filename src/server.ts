import express from 'express';
import restaurantRouter from './routes/restaurantRoute.js';
//import cors from "cors";
//import restaurantRouter from './routes/restaurantRoute'; // Assuming this file is named restaurantRoute.js

const app = express();

// Middleware that parses incoming requests with JSON payloads
app.use(express.json());

// Use the restaurantRouter for all requests to '/api/restaurants'
app.use('/api/restaurants', restaurantRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
