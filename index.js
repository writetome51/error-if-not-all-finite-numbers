"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");


function errorIfNotAllValuesAreNumbers(values) {
	var i = -1;
	while (++i < values.length) {
		errorIfNotNumber_1.errorIfNotNumber(values[i]);
	}
}

exports.errorIfNotAllValuesAreNumbers = errorIfNotAllValuesAreNumbers;
