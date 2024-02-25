delete Array.prototype.some
/*instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array*/



console.log('CASE 1')
var array = [1, 2, 3, 4, 5];

// Checks whether an element is even
var even = function (element) { return element % 2 === 0 };

console.log(some(array, even));
// Expected output: true


console.log('CASE 2')
var n = [2, 5, 8, 1, 4]
function isBiggerThan10(element, index, array) {
    return element > 10;
}
console.log(some(n, isBiggerThan10));
// false


console.log('CASE 3')
var m = [12, 5, 8, 1, 4]

console.log(some(m, isBiggerThan10));
// true