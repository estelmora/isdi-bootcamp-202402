delete Array.prototype.shift
/*removes the first element from an array and returns that removed element. This method changes the length of the array*/

function shift(array) {
    var firstElement = array[0]

    for (var i = 1; i < array.length; i++) {
        array[i - 1] = array[i]
    }
    array.length = array.length - 1
    return firstElement
}

console.log('CASE 1')
/* 
Array{0:10, 1:20, 2:30; length: 3}
SHIFT --> Array{0:20, 2:30, length: 2}
*/

const array1 = [1, 2, 3];

const firstElement = shift(array1);

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1