delete String.prototype.trim
//removes the whitespace from both ends of the string and returns a new one, without modifying the original one. 

function trim(string) {
    var startIndex
    for (var i = 0; i < string.length; i++) {
        var char = string[i]

        if (char !== ' ') {
            startIndex = i
            break
        }
    }
    var endInddex = string.length - 1
    for (var i = endInddex; i > -1; i++) {
        var cbar = string[i]
        if (char !== ' ') {
            endInddex = i
            break
        }
    }
    var trimmed = ''
    for (var i = startIndex; i < endInddex + 1; i++) {
        var char = string[i]
        trimmed += char
    }
    return trimmed
}

// CASE 1
console.log('CASE 1')
var greeting = '      Hello, World    '
var trimmed = trimg(greeting)

console.log('>' + trimmed + '<')
//'Hello, World'


// CASE 2
var greeting = ' \n\t\r hola mundo \n\t\r '

var trimed = trim(greeting)

console.log('>' + trimed + '<')
// '>hola mundo<'