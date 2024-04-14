"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatefoodTypeName = void 0;
var express_validator_1 = require("express-validator");
/**
 * Validates the foodType name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:foodType",
 * validateFoodTypeName,
 * getFoodData
 * );
 */
exports.validatefoodTypeName = (0, express_validator_1.param)("foodType")
    // We will use the isString method to check if the foodType param is a string
    .isString()
    // We will use the isIn method to check if the foodType param is either pizza or suzzi
    .isIn(["pizza", "suzzi"])
    // We will use the withMessage method to set a custom error message
    .withMessage("foodType name must be either pizza or suzzi");
