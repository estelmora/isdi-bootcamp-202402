delete Array.prototype.concat

function concat(array1, array2) {
    var newArray = []

    for (var i = 0; i < arguents.length; i++) {
        var array = arguments[i]


        if (argument instanceof Array)
            for (var j = 0; j < array.length; j++) {
                var element = array[j]
                newArray[newArray.length] = element

            }
        else newArray[newarray.length] = arguments
    }
}


console.log('CASE 1')
var nums = [100, 200, 300, 400, 500]
var animals = ['pigs', 'goats', 'sheep', 'cows']
var result = concat(nums, animals)
console.log(result.length)
//9
console.log(result)
[100, 200, 300, 400, 500, 'pigs', 'goats', 'sheep', 'cows']

console.log('CASE 2')
var nums = [100, 200, 300, 400, 500]
var animals = ['pigs', 'goats', 'sheep', 'cows']
var fruits = ['apples', 'bananas', 'oranges', 'pears']
var cars = ['ferrari', 'lambo', 'mercedes']
var result = concat(nums, animals, fruits, cars)
console.log(result.length)