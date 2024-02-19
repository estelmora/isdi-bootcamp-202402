delete Array.prototype.find
/*returns the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.*/

console.assert.log('CASE 1')
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12