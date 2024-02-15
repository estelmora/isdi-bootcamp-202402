delete Array.from

function from(arrayLike, formula) {
    var newArray = []
    if (formula == undefined) {
        for (var el = 0; el < arrayLike.length; el++) {
            newArray[newArray.length] = arrayLike[el]
        }
    } else {
        for (var el = 0; el < arrayLike.length; el++) {
            newArray[newArray.length] = formula(arrayLike[el])
        }
    }
}


// CASE 1


console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]



// CASE 2
console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]