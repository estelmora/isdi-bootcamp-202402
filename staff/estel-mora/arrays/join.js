delete Array.prototype.join
/*creates and returns a new string by concatenating all of the elements, separated by commas or a sseparator string. If the array has only one item, then that item will be returned without using the separator. */


function join(arr, separator) {
    var result = arr[0]

    for (i = 1; i < arr.length; i++) {
        result = result + separator + arr[i]
    }

    return result
}


console.log("CASE 1")
var words = ["Wind", "Water", "Fire"];
var result = join(words, "-")
console.log(result)
// 'Wind-Water-Fire'

/*
"Wind" + "-" + "Water" + " - " + "Fire" = "Wind-Water-Fire"
*/
