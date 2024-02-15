delete Array.prototype.at

function at(array, index) {
    //1.Crear una variable 'result' para el carácter a extraer
    var result;
    //2. Mirar el índice si es positivo o negativo, plantear los dos flujos
    if (index > -1) {
        //2.1 en el caso de ser positivo, extaer el carácter del string a partir del índice, pasándolo por corchetes [] y asignar a la variable "result".
        result = array[index];
        //2.2 si el índice es negativo, calcular la posición del "resultado" a extraer, restando a la longitud del array el valor del índice (pasando el resultado entre corchetes[] y así asignarlo a la variable "result")
    } else {
        var newIndex = array.length + index;
        result = array[newIndex]
        //nuevo resultado= 
    }
    return result;
}

// CASE 1
var nums = [100, 200, 300, 400, 500]

var num = at(nums, 3)

console.log(num)
// 400

// CASE 2
var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

var char = at(chars, 4)

console.log(char)
// ' '

// CASE 3
var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

var char = at(chars, -3)

console.log(char)
// 'n'

// CASE 4
var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

var char = at(chars, -30)

console.log(char)
// undefined