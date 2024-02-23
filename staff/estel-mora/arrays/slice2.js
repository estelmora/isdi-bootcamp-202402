delete Array.prototype.slice
/*returns a  copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified*/

function splice(array, start, deleteCount, item) {
}

console.log('CASE 1')

var months = ['Jan', 'March', 'April']
var extracted = splice(months, 1, 0, 'Feb')
//inserts at index 1
console.log(months)
// Expected array= ['Jan', 'Feb', 'March', 'April', 'June']

/*
array= ['Jan', 'March', 'April']
start= 1
deleteCount= 0
item= Feb
*/






console.log('CASE 2')
var months = ['Jan', , 'March', 'April']
var extracted = splice(months, 4, 1, 'May')
// Replaces 1 element at index 4

console.log(extracted) //expected= ['June']
console.log(months)
// expected array= ['Jan', 'Feb', 'March', 'April', 'May']
