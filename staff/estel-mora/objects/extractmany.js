// **
//  * 
//  * @param {*} obj
//     * @param {*} value
//         * /
function extractMany(object, callback) {
    var extracted = { length: 0 }
    var indexExtracted = { length: 0 }

    for (var i = 0; i < object.length; i++) {
        var element = object[i]
        var matches = callback(element)

        if (matches) {
            extracted[extracted.length] = element
            extracted.length++
            indexExtracted[indexExtracted.length] = i
            indexExtracted.length++
        }
    }

    for (var i = 0; i < indexExtracted.length; i++) {
        index = indexExtracted[i]
        delete object[index]
    }

    object.length = object.length - extracted.length

    return extracted
}


console.log('CASE 1: extracts many users form users')

var users = {
    0: { name: 'Wendy', age: 19 },
    1: { name: 'Peter', age: 20 },
    2: { name: 'Pepito', age: 50 },
    3: { name: 'Campa', age: 30 },
    4: { name: 'James', age: 40 },
    length: 5
}

var extracted = extractMany(users, function (user) {
    return user.age > 25
})

console.log(extracted)
/*
{
    0: { name: 'Pepito', age: 50 },
    1: { name: 'Campa', age: 30 },
    2: { name: 'James', age: 40 },
    length: 3
}
*/

console.log(users)
/*
{
    0: { name: 'Wendy', age: 19 },
    1: { name: 'Peter', age: 20 },
    length: 2
}
*/