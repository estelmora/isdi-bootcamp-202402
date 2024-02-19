delete Array.prototype.filter

/* creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function */

console.log(' CASE 1')

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]