delete Array.prototype.indexOf

function indexOf(array, searchArray) {
    if (searchArray === "") {
        return 0
    }

    for (let i = 0; i < array.length - searchArray.length; i++) {
        let match = true;
        for (let j = 0; j < searchArray.length; j++) {
            if (array[i + j] !== searchArray[j]) {
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

var arrayS = ['hola mundo']

var index = indexOf(array, 'ola')

console.log(index)
// 1

// CASE 2

var arrayS = ['hola mundo']

var index = indexOf[array, 'olaf']

console.log(index)
// -1