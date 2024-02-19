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

//SHIFT 
//array[0]= array[1]
//array[1]= array[2]
//array[2]= array[3]
// length-- // length= length -1


// array[0] {0:10, 1:20, 2:30, 3:40 length:4}
// var firstElement= 10
//array.length= array.lentgth -1 = 0-1= -1 --> no se añade en ninguna posición

// array[1] {0:20, 1: 30, 2:40; length: 3}
//var firstElement = 20
//array.length = array.length -1= 1-1 --> 0 (primera posición del nuevo array)
// [0:20,]


// array[2] {0:30, 1:40; length: 2}
//var firstElement= 30
//array.length= array.length-1= 2-1 --> 1 (segunda posición del nuevo array)
// [0:20, 1:30,]


// array[3] {0:40; length: 1}
// var firstElement= 40
// array.length= array.length-1 = 3-1 --> 2 (tercera posició del nuevo array)
// [1:20, 2:30, 3:40]

//siguiente iteración sería 4<4 y no se cumple, salimos del array, y se retorna el nuevo array. 



const array1 = [10, 20, 30, 40];

const firstElement = shift(array1);

console.log(array1);
// Expected output: Array [20, 30, 40]

console.log(firstElement);
// Expected output: 10