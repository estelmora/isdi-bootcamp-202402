delete String.prototype.startsWith

function startsWith(string, searchString) {
    var len = searchString.length
    var word = ''
    for (var i = 0; i < len; i++) {
        word += string[i];
    }
    if (word === searchString) return true
    return false
}

// CASE 1

var s = 'hola mundo'

var result = startsWith(s, 'hol')

console.log(result)
// true

// CASE 2

var s = 'hola mundo'

var result = startsWith(s, 'holo')

console.log(result)
// false