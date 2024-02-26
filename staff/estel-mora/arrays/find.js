delete Array.prototype.find
/*returns the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.*/

function find(array, callback) {
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i]
        }
    }
}

console.log('CASE 1')
var nums = [5, 12, 8, 130, 44];
/*
CURRENT CASE
for (var i = 0; i < array.length; i++) {
    if (130 > 10) {
        return 130
    }
}
GENERALITZANT
for (var i = 0; i < array.length; i++) {
    if (ELEMENTO > 10) {
        return ELEMENTO
    }
}
GENERALITZANT ++
for (var i = 0; i < array.length; i++) {
    if (array[i] > 10) {
        return array[i]
    }
}

PASSEM DE CONDICIO ESPECIFICA (element > 10) a CONDICIO GENERAL DETERMINADA PEL CALLBACK
for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
        return array[i]
    }
}


*/
var found = find((element)  { return element > 20 })
// callback
console.log(found)
// Expected output: 130  