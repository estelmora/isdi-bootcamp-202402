deleteArray.prototype.includes

function includes(array, value)
if (arguments.lenght < 3) { }
for (var i = 0; i < array.length; i++) {
    var element = array[i]
    if (element === value)
        return true
    return false
} else {
    if (fromIndex > -1) {
        for (var i = fromIndex; i < array.length; i++) {
            var element = array[i]
            if (element === value)
                return true
        }
        return false

    }

}
return false
//CASE 1
var nums = [100, 200, 300, 400, 500]
var result = inlcudes(nums, 600)
console.log(result)
//false

//CASE 2
var animals = ['pigs', 'goats', 'sheep', 'cows']
var result = includes(animals, 'sheeps')
console.log(result)
//true


//CASE 3
var nums = [10, 20, 30]
var result = includes(num, 3, 3); //valor 3 a partir de la posiciónn 3
console.log(result)
//false

//CASE 4
var nums = [10, 20, 30]
var result = includes(num, 30, 1); //valor 3 a partir de la posiciónn 3
console.log(result)
//false