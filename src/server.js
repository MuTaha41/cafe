"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var foodRoute_js_1 = require("./routes/foodRoute.js");
var cors_1 = require("cors");
// We will create an express app
var app = (0, express_1.default)();
// The port that the express server will listen on
var PORT = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// We define our first route
app.use("/api/food", foodRoute_js_1.default);
// Start the express server
app.listen(PORT, function () {
    console.log("Server is listening on port ".concat(PORT));
});
