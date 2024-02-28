// en este ejercicio vamos a re-factorizar con el "testing-tool", module exports. 
delete Array.prototype.map
var assert = require('./assert')

function map(array, callback) {
    var newArray = []

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        var mappedElement = callback(element, i, array)

        newArray[i] = mappedElement
    }

    return newArray
}

console.log('CASE 1 nums x2')

var nums = [1, 4, 9, 16]

var numsX2 = map(nums, function (x) { return x * 2 })


assert.HasValues(numsX2[2, 8, 18, 32])
assert.HasValues(nums, 1, 4, 9, 16)

console.log('CASE 2 nums x100')

var nums = [10, 20, 30, 40, 50]

var numsX100 = map(nums, function (num) {
    return num * 100
})

assert.HasValues(numsX100[1000, 2000, 3000, 4000, 5000])
assert.HasValues(nums[10, 20, 30, 40, 50])

console.log('CASE 3 chars values to upper case')

var chars = ['a', 'b', 'c']

var charsInUpper = map(chars, function (char) {
    return char.toUpperCase()
})

assert.HasValues(charsInUpper['A', 'B', 'C'])
assert.HasValues(chars['a', 'b', 'c'])


console.log('CASE 4 map nums in string element,index, array')

var nums = [10, 20, 30]

var result = map(nums, function (element, index, array) {
    return element + ', ' + index + ', [' + array + ']'
})

assert.HasValues(result, '10, 0,[10,20,30]', '20, 1, [10,20,30]', '30, 2, [10,20,30]')

assert.HasValues(nums[10, 20, 30])


console.log('CASE 5')

var data = [
    { name: 'Peter', mark: 9 },
    { name: 'Wendy', mark: 9.6 },
    { name: 'Pepito', mark: 6 },
    { name: 'Campa', mark: 7 }
]

function calculateCake(element, index, array) {
    // ex: (7/31.6 * 100).toFixed(2)

    var sum = 0

    for (var i = 0; i < array.length; i++) {
        var item = array[i]

        sum += item.mark
    }

    var piece = parseFloat((element.mark / sum * 100).toFixed(2))

    return { name: element.name, piece: piece }
}

var cake = map(data, calculateCake)

console.log(cake)
/*
[
    { name: 'Peter', piece: 28.48 },
    { name: 'Wendy', piece: 30.38 },
    { name: 'Pepito', piece: 18.99 },
    { name: 'Campa', piece: 22.15 }
]
*/
assert.HasValues(cake, { name: 'Peter', piece: 28.48 }, { name: 'Wendy', piece: 30.38 }, { name: 'Pepito', piece: 18.99 }, { name: 'Campa', piece: 22.15 })

assert.ValuesPropertiesMatch(cake, [{ name: 'Peter', piece: 28.48 }, { name: 'Wendy', piece: 30.38 }, { name: 'Pepito', piece: 18.99 }, { name: 'Campa', piece: 22.15 }], function (current, target) {
    return current.name === target.name && current.piece === target.piece
})

