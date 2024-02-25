delete Array.prototype.slice

/*returns a  copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified*/
function slice(array, index) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }
} else if (condition) {
    for (var i = 0; i < index.length - 1; i++) {
        newArray[i] = array[i];
    }
}


var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log('CASE 1')
slice(animals, 2)
// Expected output: Array ["camel", "duck", "elephant"]
// deletes the first 2 elements from the array and returns a newArray where it's been modified.
// animals[0]= 'camel'
//animals[1]= 'duck'
//animals[2]= 'elephant'
// newArray= ['camel', 'duck', 'elephant]
/* for(var i=2; i < array.length; i++){
    newArray[i]= Array[i]
} return newArray
*/

console.log('CASE 2')
slice(animals, 2, 4)
// Expected output: Array ["camel", "duck"]
// creates a newArray where it keeps the array positions from 2-4 (not included, so [2] & [3]) from the original array. 
// newArray[0]= array[2] --> 'camel'
// newArray[1]= array[3] --> 'duck'
/* create a FOR loop
for (var i= 2; i <4; i++){
    newArray[i]= array[i]
}return newArray
*/

console.log('CASE 3')
slice(animals, 1, 5)
// Expected output: Array ["bison", "camel", "duck", "elephant"]
// creates a newArray where it keeps the values of position 1 to 5(not included)from the original array. 
// newArray[0]= array[1] --> 'bison'
// newArray[1]= array[2]--> 'camel'
// newArray[2]= array[3] --> 'duck'
// newArray[3]= array[4] --> 'elephant'
/* create a for loop:
for (var i= 1; i<5; i++){
    newArray[i]= array[i]
} return newArray
    */
console.log('CASE 4')
slice(animals, -2)
// Expected output: Array ["duck", "elephant"]
// creates a newArray, counting from the back array.length -1, where max number is -2 in this case. 
// newArray[1]= array.length-1 --> 'elephant'
// newArray[0]= array.length-2 --> 'duck'
/* create a for loop
for (var i= array.length; i<array.length-1; i--)
???  */

console.log('CASE 5')
slice(animals, 2, -1)
// Expected output: Array ["camel", "duck"]
// if index < 0 count backwards! ex: 2-1
// create 1st loop to start counting forwards  for (var i= 2; i<??
// create another for loop- to start counting backwards for (var i= ???)
// newArray[i]= array[2]
// new Array[i]= array[-1]

console.log('CASE 6')
slice(animals)
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
// no need to change anything in the code, rules should apply the same as before. 
