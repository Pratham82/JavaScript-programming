/*
Check Factors
Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

Examples
checkFactors([2, 3, 4], 12) ➞ true
 Since 2, 3, and 4 are all factors of 12.

checkFactors([1, 2, 3, 8], 12) ➞ false
 8 is not a factor of 12.

checkFactors([1, 2, 50], 100) ➞ true

checkFactors([3, 6], 9) ➞ false
 */

function checkFactors(factors, num) {
	// return factors.map(i => num % i === 0).filter(i => i=='false').length ==0
	return factors.map((i) => num % i === 0).every((i) => i == true);
}
checkFactors([1, 2, 3, 8], 12);
