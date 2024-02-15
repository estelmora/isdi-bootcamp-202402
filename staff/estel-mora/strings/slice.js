delete String.prototype.slice

function slice(string, indexStart, indexEnd) { //retorna un string nou que comença amb la posició indexstart fins indexEnd
    let newString = ""
    for (let i = indexStart; i < indexEnd; i++) {
        newString = newString + string[i]
        console.log(newString)
    }
    return newString
}

var s = 'hola mundo'

var piece = slice(s, 5, 8)

console.log(piece)

// CASE 2

var s = 'hola mundo'

var piece = slice(s, -3)

console.log(piece)
// 'ndo'


