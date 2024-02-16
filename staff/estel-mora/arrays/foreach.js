delete Array.prototype.forEach
// para cada elemento que hay en la izquierdo lo envia  ala función y luego envia console.log

function forEach(array, callback /*esto es realmente una funcion*/) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]
        callback(element, 1, array)
    }
}

//CASE 1
var nums = [10, 20, 30, 40, 50]
forEach(nums, function (num) {
})
/* 10
20
30
40
50*/

//CASE 2
var nums = [10, 20, 30, 40, 50]
var sum = 0
forEach(nums, function (num) {
    sum += num
})
console.log(sum)
//150


//CASE 3
var nums = [10, 20, 30, 40, 50]
forEach(nums, function (num, index) {
    sum += num
})
console.log(sum)
// 10
// 21
// 32
// 43
// 54

//CASE 4
var nums = [10, 20, 30, 40, 50]
forEach(nums, function (num, index, array) {
    sum += num
})
console.log(num + index + array.length)
// 15
// 26
// 37
// 48
// 59