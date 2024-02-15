delete String.prototype.endsWith

function endsWith(string, searchString) {
    let index = string.length - searchString.length
    for (let i = 0; i < searchString.length; i++) {
        if (string[index + i] != searchString[i]) {
            return false
        }
    }
    return true
}

// CASE 1

var s = 'hola mundo'

var result = endsWith(s, 'ndo')

console.log(result)
// true

// CASE 2

var s = 'hola mundo'

var result = endsWith(s, 'dos')

console.log(result)
// false