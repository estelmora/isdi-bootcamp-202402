delete Array.prototype.join
/*creates and returns a new string by concatenating all of the elements, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. */



console.log("CASE 1")
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"