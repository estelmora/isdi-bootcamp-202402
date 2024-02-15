delete String.prototype.at

function at(string, index) {
    //1. crear una variable 'auxiliar/resultado' para el carácter a extraer. 
    //2. Mirar el índice si es positivo o negativo, planeatar los dos flujos. 
    //3. en el caso que el índice sea positivo, estraer el carácter del string a partir del índice (pasándolo por corchetes) {}
    //4. en el caso que el índice sea negativo, calcular la posición del carácter a extraer, restando a la longitud del string el valor de índice(pasándo el resultado de la resta entre corchetes  ...)
    //5. 
}

// CASE 1

var s = 'hola mundo'

var char = at(s, 6)
// 'u'

// CASE 2

var s = 'hola mundo'

var char = at(s, 20)
// undefined

// CASE 3

var s = 'hola mundo'

var char 