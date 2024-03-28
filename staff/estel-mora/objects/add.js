/**
 * Adds an element to an iterable object
 * @param {*} object - The iterable object
 * @param {*} value - The value we want to add
 * 
 * @throws {TypeError} when the object we put is not an Object 
 * 
 */
function add(object, value) {
    if (object instanceof Object) {
        object[object.length] = value
        object.length++
        return object.length
    } else throw TypeError(object + ' is not an Object')

}


console.log('CASE 1: add violet in colors')
var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}
var length = add(colors, 'violet')
console.log(length)
// 4
console.log(colors)
/*
{
    0: 'red',
    1: 'blue',
    2: 'green',
    3: 'violet',
    length: 4
}
*/

console.log('CASE 2: Error when we add a number instead of an Object')
try {
    console.log(add(1, 'hello'))
} catch (error) {
    console.log(error)
}
// TypeError: 1 is not an Object