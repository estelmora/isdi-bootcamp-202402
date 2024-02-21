/**
 * Removes an element in iterable object at specfified index.
 *
 * @param object - The iterable object to mutate. 
 * @param index - The index from which to remove a value.
 * 
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */
function remove(object, index) {
    var objects = ''
    var removedColor = ''
    for (var i = index; i < objects.length; i++) {
        objects[i] = objects[i + 1]
        objects.length[i] = objects.legnth[i - 1]

    } return removedColor
    if (!(object instanceof Object)) throw new TypeError(object + ' is not an Object')
}

console.log('CASE 1: remove blue from index 1')
/*
1. create a new variale to store the removed color --> var removed= color[1]
2. move forward position objects [2] to color[1], keeping color[0] intact
color[1]= color[i-1] --> meaning color[1]= color[2-1]--> [1] = 'green'
delete the same numbers as removed items= object.lengt-- (1)
return colors
*/
var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var removed = remove(colors, 1)

console.log(removed)
// 'blue'

console.log(colors)
/*
{
    0: 'red',
    1: 'green',
    length: 2
}
*/

console.log('CASE 2: remove red from index 0')
var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var length = remove(colors, 0)

console.log(length)
// 'red'

console.log(colors)
/*
{
    0: 'blue',
    1: 'green',
    length: 2
}
*/

console.log('CASE 3: fails on undefind object parameter')

try {
    remove()
} catch (error) {
    console.log(error)
    // TypeError: undefined is not an Object
}

console.log('CASE 4: fails on 1 as an object parameter')

try {
    remove(1)
} catch (error) {
    console.log(error)
    // TypeError: 1 is not an Object
}

console.log('CASE 5: fails on undefined as index parameter')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

try {
    remove(colors)
} catch (error) {
    console.log(error)
    // TypeError: undefined is not a Number
}