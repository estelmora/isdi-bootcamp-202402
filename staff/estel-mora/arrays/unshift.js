delete Array.prototype.unshift
/*adds the specified elements to the beginning of an array and returns the new length of the array.*/
function unshift(array, elements) {

    var elementsLength = arguments.length - 1 // -1 fa referència a l'array (que es 1, per poder obtenir el num d'elements)
    var newArrayLength = array.length + elementsLength // total 5

    for (var i = newArrayLength - 1; i > -1; i--) {

        array[i] = array[i - elementsLength]
    }
    for (var i = 1; i < arguments.length; i++) {
        array[i - 1] = arguments[i]
    }
    return array.length
}

//  1er for -PRIMERA ITERACIÓ
//var i= newArrayLength-1 --> 5-1=4; 
// 4 > -1 si; i--
// array[4] = array[4-2] //2= elementsLength
// array[4]= 3 

//1er for - SEGONA ITERACIÓ
// var i= 3 > -1? si; i--
// array[3] = array[3-2]= 1= elementsLength
// array[3]= 2

//1er for - TERCERA ITERACIÓ
// var i=2 > -1? si; i--
// array[2] = array[2-2]= 0 elementsLength
// array[2] = 1

// 1er for - QUARTA ITERACIÓ
//var i= 1 > -1? si; i--
//array [1]= array[1-2]= -1
// array[-1]= undefined? crea un espai buit dins el nou array

//1er for - CINQUENA ITERACIÓ
// var i= 0 > -1? si; i--
// array[0] = array [0-2]= -2 elementsLength
// array[-2]= undefined? crea un espai buit dins el nou array



//2n for -- PRIMERA ITERACIÓ
// var i=1 (arguments[1]= 4) 
// 1 < 3 si; i++
// array [1-1] = 4
// array[0]=4

//2n for- SEGONA ITERACIÓ
// var i= 2 (arguments[2]=5)
// 2 < 3 si; i++
// array [2-1]= 5
// array[1]= 5


console.log('CASE 1')
console.log('hola')

const array1 = [1, 2, 3]

// array[4]= array[2]
// array[3]= array[1]
//array[2]= array[0]
//array[1]= arguments[2]
//array[0]= arguments[1]
// return array.length

//arguments= [array1, 4,5 ]  --> arguments.length =3
unshift(array1, 4, 5)
// Expected output: 5 (means the total length after adding this two numbers)

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]