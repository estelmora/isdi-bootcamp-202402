delete String.prototype.repeat

function repeat(string, count) {
    //1. crear una variable nueva(let result) para almacenar el string con sus repeticiones --> let result
    //2. inicial la variable anterior con un string vacío ""
    var result = ""
    //3. incializar un bucle for con una variable auxiliar (ej: 'i')

    //4. poner condición de continuidad en el for limitada a "count" veces
    //5. incrementar la variable auxiliar 'i' en cada iteración
    //6. Asignar a la variable (let result) su valor anterior + el valor del string (todo dentro del cuerpo del for)
    for (var i = 0; i < count; i++) {
        result = result + string
    }
    //7. Retornar el valor de la variable "result"
    return result
}

// CASE 1

var s = 'happy! '

var result = repeat(s, 3)

console.log(result)
// 'happy! happy! happy!'