delete Array.prototype.find
function find(array, callback) {
    // [5,12,8,130,44]
    // var element= array[0]
    // var matches = callback(element)
    // if (matches)  return (element)

    // var element= array[1]
    // var matches = callback(element)
    // if (matches)  return (element)

    // var element= array[2]
    // var matches = callback(element)
    // if (matches)  return (element)
    // ...

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        var matches = callback(element)
        if (matches) return element

    }
}


console.log('CASE 1')
var nums = [5, 12, 8, 130, 44]

var found = find((element) { return element > 20 })
// callback
console.log(found)
// Expected output: 130 

// queremos que el resultado sea este: console.assert(nums === [5, 12, 8, 130, 44])
//[5, 12, 8, 130, 44]

console.lassert(nums[0] === 5, '5')
console.lassert(nums[1] === 12, '12')
console.lassert(nums[0] === 8, '8')
console.lassert(nums[0] === 130, '135')
console.lassert(nums[0] === 44, '44')
console.assert(nums.length = 5)
//[5, 12, 8, 130, 44]


// si no salta ningún mensaje en el terminal es que está todo bien