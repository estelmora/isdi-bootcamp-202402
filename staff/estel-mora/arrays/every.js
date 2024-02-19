delete Array.prototype.every

/* tests whether all elements in the array pass the test by the provided function. It returns a Boolean value.*/

console.log('CASE 1')

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true