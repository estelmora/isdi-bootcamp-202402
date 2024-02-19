delete Array.prototype.map
/*creates a new array populated with the results of calling a provided function on every element in the calling array*/

function map(array, callback) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i]) // quan una funció retorna, la seva cridada equival valor que retorna - alex 
    }
    return newArray
}
// for 1º iteració
//i= 0 < 4 si; i++
// callback 1*2=2 --> 
// NewArray[0]=2

//for 2ª iteració
// i= 1 <4 si; i++
// callback 4*2=8
//NewArray[1]= 8

//for 3ª iteració
// i=2 <4? sí; i++
// callback 9*2= 18
//NewArray[2] 18

// for 4º iteració
// i=3 < 4? sí; i++
// NewArray[3]= 32

//for 5º iteració:
// i= 4 < 4? NO; s'acaba el for i retornem el resultat del nou array
// NewArray= [2,8,18,32]


console.log('CASE 1')

const array1 = [1, 4, 9, 16];

// Pass a function to map
const numsx2 = map(array1, function (num) { return num * 2 })
// callback= function (num) { returnx * 2 }

console.log("hola")
