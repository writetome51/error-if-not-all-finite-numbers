import { errorIfNotNumber } from 'basic-data-handling/errorIfNotNumber';
import { errorIfNotPopulatedArray} from 'error-if-not-populated-array';


export function errorIfNotAllValuesAreNumbers(values: number[]): void {
	errorIfNotPopulatedArray(values);
	let i = -1;
	while (++i < values.length) {
		errorIfNotNumber(values[i]);
	}
}
