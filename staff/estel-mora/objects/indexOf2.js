//simulamos como si fuera un array
function indexOf(object) {
    var index
    for (var i = 0; i < object.length; i++) {
        var element = object[i]

        if (element === value)
            return i
    }
    return -1
}

console.log('CASE 1')
var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var index = indexOf(colors, 'blue')
//consonle.log(index) --> 1

