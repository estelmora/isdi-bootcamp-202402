delete Array.prototype.shift
/*removes the first element from an array and returns that removed element. This method changes the length of the array*/

function shift(array) {
    var firstElement = array[0]


    array[0] = array[1]
    array[1] = array[2]
    array.length--
    return firstElement

}

console.log('CASE 1')
/* 
Array{0:10, 1:20, 2:30; length: 3}
SHIFT --> Array{0:20, 2:30, length: 2}
*/

const array1 = [1, 2, 3];

const element1 = shift(array1);

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1


console.log('CASE 2')
var animals = ['elephant', 'sheep', 'cow', 'dog']
var firstElement = shift(animals)
/* Array {0:elephant, 1:sheep, 2:cow, 3:dog}
var first= array[0]= elephant
array[0]= array[1] // array{0:sheep, 1:sheep, 2:cow, 3:dog; length: 4}
array[1]= array[1] // array{0:sheep, 0:sheep, 1:cow, 2:dog; length: 3}
array[2]= array[1] // array{0:sheep, 0:sheep, 1:cow, 2:dog; length: 2}
array.length: 
return first
*/

console.log(animals)
//['sheep', 'cow, 'dog]
console.log(firstElement)
// 'elephant'

console.log('CASE 3')

var cocktails = ['margarita', 'sex on the beach', 'bloody mary', 'gin tonic', 'mojito', 'daikiri']
var firstElement = shift(cocktails)
/* Array {0:margarita, 1:sex on the beach, 2:blody mary, 3:gin tonic, 4:mojito, 5:daikiri; length: 6}
var first= array[0]= 'sex on the beach'
array[0]= array[1] // array{0:margarita, 1:sex on the beach, 2:bloody mary, 3:gin tonic; 4:mojito: 5:daikiri, length: 6}
array[1]= array[1] // array{0:sex on the beach, 1:bloody mary, 2:gin tonic; 3:mojito: 4:daikiri, length: 5}
return first
*/

console.log(animals)
//['sheep', 'cow, 'dog]
console.log(firstElement)
// 'elephant'