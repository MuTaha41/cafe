// import express from "express";
// import restaurantRoute from "./routes/restaurantRoute"; // Renamed import
// import cors from "cors";

// // Create an express app
// const app = express();

// // The port that the express server will listen on
// const PORT = 3000;

// app.use(express.json());
// app.use(cors());

// // Define the route for restaurant data
// app.use("/api/restaurants", restaurantRoute); // Updated route

// // Start the express server
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

import express from 'express';
import restaurantRouter from './routes/restaurantRoute'; // Assuming this file is named restaurantRoute.js

const app = express();

// Middleware that parses incoming requests with JSON payloads
app.use(express.json());

// Use the restaurantRouter for all requests to '/api/restaurants'
app.use('/api/restaurants', restaurantRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
