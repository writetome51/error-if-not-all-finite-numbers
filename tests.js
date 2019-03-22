var errorIfNotAllValuesAreNumbers = require("./index").errorIfNotAllValuesAreNumbers;


// Test 1
var errorTriggered = false;
try {
	errorIfNotAllValuesAreNumbers([1, 2, 3, 4, false, 6, 7, 8]);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2
errorTriggered = false;
try {
	errorIfNotAllValuesAreNumbers([1000, 200000, 400000, -1.5, '0']);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3
errorTriggered = false;
try {
	errorIfNotAllValuesAreNumbers([1000, 200000, 400000, -1.5, NaN]);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4
errorTriggered = false;
try {
	errorIfNotAllValuesAreNumbers([1000, 200000, 400000, -1.5, Number.MAX_VALUE]);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 FAILED'); // shouldn't be an error.
else console.log('test 4 passed');


// Test 5
errorTriggered = false;
try {
	errorIfNotAllValuesAreNumbers([1000, 200000, 400000, -1.5, Number.MIN_VALUE]);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 FAILED'); // shouldn't be an error.
else console.log('test 5 passed');


// Test 6
errorTriggered = false;
try {
	errorIfNotAllValuesAreNumbers([1000, 200000, 400000, -1.5, Infinity]);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');



// Test 7
errorTriggered = false;
try {
	errorIfNotAllValuesAreNumbers([1000, 200000, 400000, -1.5, []]);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');

