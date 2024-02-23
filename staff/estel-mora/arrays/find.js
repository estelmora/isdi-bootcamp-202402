delete Array.prototype.find
/*returns the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.*/

function find(array, callback) {

}

console.assert.log('CASE 1')
var nums = [5, 12, 8, 130, 44];

var found = find((element) { return element > 20 })
// callback
console.log(found)
// Expected output: 130