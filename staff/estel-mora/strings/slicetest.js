delete String.prototype.slice

function slice(string, indexStart, indexEnd) {
    var newString = ""
    if (indexStart < 0) {
        for (var i = string.length + indexStart; i < string.length; i++) {
            newString = newString + string[i]
        }
    }
    for (var i = indexStart; i < indexEnd; i++) {
        newString = newString + string[i]
        console.log(newString)
    }

    return newString
}


// RESULTAT

var s = 'hola mundo'

slice(s, -3) //com el valor es negatiu = iterar pel final en comptes el ppi.
// 'ndo'
//AIXÒ VOL DIR MODIFICAR EL for



