delete String.prototype.indexOf

function indexOf(string, searchString) {
    if (searchString === "") {
        return 0
    }

    for (let i = 0; i < string.length - searchString.length; i++) {
        let match = true;
        for (let j = 0; j < searchString.length; j++) {
            if (string[i + j] !== searchString[j]) {
                match = false //només es torna false si es compleix la condició(if) de dalt.
                break //només surtim del loop si es compleix la condició (if) de dalt.
            }
        }
        if (match == true) {
            return i
        }
    }

    return -1
}

// CASE 1

var s = 'hola mundo'

var index = indexOf(s, 'ola')

console.log(index)
// 1

// CASE 2

var s = 'hola mundo'

var index = indexOf(s, 'olaf')

console.log(index)
// -1