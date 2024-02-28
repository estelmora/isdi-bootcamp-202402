delete Array.prototype.forEach

var assert = require('./assert')

function forEach(array, callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        callback(element, i, array)
    }
}

console.log('CASE 1: copy nums [10, 20, 30, 40, 50] into other')

var nums = [10, 20, 30, 40, 50]
var other = []

forEach(nums, function (num) {
    other[other.length] = num
})
// 1. Antes de realizar cambios así es como está la función con el assert

// 10
// 20
// 30
// 40
// 50

// console.assert(nums[0] === 10, '10')
// console.assert(nums[1] === 20, '20')
// console.assert(nums[2] === 30, '30')
// console.assert(nums[3] === 40, '40')
// console.assert(nums[40] === 50, '50')
// console.assert(nums.length === 5, '5')

// console.assert(other[0]=== nums[0], 0)
// console.assert(other[1]=== nums[1], 1)
// console.assert(other[2]=== nums[2], 2)
// console.assert(other[3]=== nums[3], 4)
// console.assert(other[4]=== nums[4], 4)
// console.assert(other.length=== nums.length, 'length')



//2. Buscamos una manera más eficiente y fácil para poder hacer lo mismo, con menos líneas. 
// Substituimos tdo el paso 1 por este paso 2.
function assertHasValues(iterable) {
    var count = arguments.length - 1 //(-1 porque arguments es 'nums + todas las pociones de []')

    for (n = 0; n < count; n++) {
        var current = iterable[n]
        var target = arguments[n + 1]

        console.assert(current === target, 'for index' + n + ', ' + current + 'equals' + target) //con esto se consegui explicar mejor por si hay fallos  
    }
    console.assert(iterable.length === count, 'lenght' + iterable.length + 'equals' + count)
}

assert.hasValues(nums, 10, 20, 30, 40, 50)
assert.hasValues(other, 10, 20, 30, 40, 50)


// 3. vamos al caso 2
console.log('CASE 2: copy nums into other')

var nums = [10, 20, 30, 40, 50]
var sum = 0

forEach(nums, function (num) {
    sum += num
})

//3.1 console.assert (sum === 150, 150), otra manera de hacerlo.
/* 3.2 se puede hacer con una función  ( y 3.1 no sería necesario) */
function assertEqualsValue(value, target) {
    console.assert(value === target, target)
}

assert.equalsValue(sum, 150)
// 150


console.log('CASE 3: num + index')

var nums = [10, 20, 30, 40, 50]
var other = []

forEach(nums, function (num, index) {
    other[other.length] = num + index
})

assert.hasValues(other, 10, 21, 32, 43, 54)


console.log('CASE 4: num + index + array.length')

var nums = [10, 20, 30, 40, 50]
var other = []

forEach(nums, function (num, index, array) {
    other[other.length] = num + index + array.length
})

assert.hasValues(other, 15, 26, 37, 48, 59)


console.log('CASE 5: no callback (undefined)')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums)
} catch (error) {
    assert.error(error, 'TypeError', 'undefined is not a function')
}


console.log('CASE 6: {} as callback')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, {})
} catch (error) {
    assert.error(error, 'TypeError', '[object Object] is not a function')
}


console.log('CASE 7: 123 as callback')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, 123)
} catch (error) {
    assert.error(error, 'TypeError', '123 is not a function')
}


console.log('CASE 8: true as callback')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, true)
} catch (error) {
    assert.error(error, 'TypeError', 'true is not a function')
}

console.log('CASE 9: false as callback')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, !true)
} catch (error) {
    assert.error(error, 'TypeError', 'false is not a function')
}