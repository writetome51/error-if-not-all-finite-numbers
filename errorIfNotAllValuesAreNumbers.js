"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
function errorIfNotAllValuesAreNumbers(values) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(values);
    var i = -1;
    while (++i < values.length) {
        errorIfNotNumber_1.errorIfNotNumber(values[i]);
    }
}
exports.errorIfNotAllValuesAreNumbers = errorIfNotAllValuesAreNumbers;
errorIfNotAllValuesAreNumbers([1, 2, 3, 4, undefined]);
