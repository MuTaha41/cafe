import express from "express";
import drinkRoute from "./routes/drinkRoute.js";
import cors from "cors";
 
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use("/api/drink", drinkRoute);
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});



// import express from "express";
// import drinkRoute from "./routes/drinkRoute.js"; // Updated import to handle drink routes
// import cors from "cors";

// const app = express();
// const PORT = 3000;

// app.use(express.json());
// app.use(cors());

// // Updated the API route to reflect drinks
// app.use("/api/drink", drinkRoute);

// // Error handling middleware should be the last piece of middleware added to the app
// app.use((err, _req, res, next) => {
//   if (!err) return next(); // if there is no error, continue to the next middleware
//   // Handle the error and send a response
//   res.status(err.status || 500).json({
//     error: {
//       message: err.message,
//     },
//   });
// });

// // Start the express server
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
