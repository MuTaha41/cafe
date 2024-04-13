"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var foodController_js_1 = require("../controllers/foodController.js");
var validators_js_1 = require("../middleware/validators.js");
// We will create a router object
var router = express_1.default.Router();
// We will create a route for the food data based on the foodType name
router.get("/:foodType", validators_js_1.validatefoodTypeName, foodController_js_1.getFoodData);
// We will export the router
exports.default = router;
