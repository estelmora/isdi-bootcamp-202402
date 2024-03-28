/**
 * 
 * @param {*} object 
 * @param {*} callback 
 */
function extract(object, callback) {
    var extracted
    var indexExtracted
    for (var i = 0; i < object.length; i++) {
        if (callback(object[i])) {
            extracted = object[i]
            indexExtracted = i

            break
        }
    }
    for (var i = indexExtracted; i < object.length - 1; i++) {
        object[i] = object[i + 1]
    }
    object.length--
    delete object[object.length]

    return extracted
}

console.log('CASE 1: extract user pepito form users')

var users = {
    0: { name: 'Wendy', age: 19 },
    1: { name: 'Peter', age: 20 },
    2: { name: 'Pepito', age: 50 },
    3: { name: 'Campa', age: 30 },
    4: { name: 'James', age: 40 },
    length: 5
}

var user = extract(users, function (user) {
    return user.name === 'Pepito'
})

console.log(user)
// { name: 'Pepito', age: 50 }

console.log(users)
/*
{
    0: { name: 'Wendy', age: 19 },
    1: { name: 'Peter', age: 20 },
    2: { name: 'Campa', age: 30 },
    3: { name: 'James', age: 40 },
    length: 4
}
*/