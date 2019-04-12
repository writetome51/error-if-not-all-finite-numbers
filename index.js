"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eIfNFN_1 = require("error-if-not-finite-number");


function errorIfNotAllFiniteNumbers(values) {
	var i = -1;
	while (++i < values.length) {
		eIfNFN_1.errorIfNotFiniteNumber(values[i]);
	}
}
exports.errorIfNotAllFiniteNumbers = errorIfNotAllFiniteNumbers;
