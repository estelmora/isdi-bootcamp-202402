/**
 * Returns the index of a value inside a given object.
 * If the value doesn't appear, it returns -1
 * @param {*} object 
 * @param {*} value 
 */
function indexOf(object, value) {
    if (object instanceof Object) {
        for (var i = 0; i < object.length; i++) {
            if (object[i] === value) {
                return i
            }
        }
        return -1
    } else throw TypeError(object + ' is not an Object')
}

console.log('CASE 1: index of blue in colors')
var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}
var index = indexOf(colors, 'blue')
console.log(index)
// 1
console.log(colors)
/*
{
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}
*/


console.log('CASE 2: shows error when object is not an Object')
try {
    console.log(indexOf('hello', 'blue'))
} catch (error) {
    console.log(error)
}