delete Array.prototype.slice
/*changes the contents of an array by removing or replacing existing elements and/or adding new elements in place*/

function splice(array, start, deleteCount, item) {
    // Handling the case where deleteCount is 0
    if (deleteCount === 0) {
        return []
    }
    // Handling the case where deleteCount is 1
    else if (deleteCount === 1) {
        var removed = []
        removed.push(array[start])
        array[start] = item
        return removed
    }
    // Handling the case where deleteCount is more than 1
    else {
        var removed = [];
        // Storing elements to be removed in 'removed' array
        for (var i = 0; i < deleteCount; i++) {
            if (array[start + i] !== undefined) { // Checking if index is valid
                removed.push(array[start + i])
            }
        }
        // Shifting remaining elements to the left
        for (var j = start; j < array.length - deleteCount; j++) {
            array[j] = array[j + deleteCount]
        }
        // Truncating the array
        array.length -= deleteCount;
        // Inserting 'item' at 'start' index
        array[start] = item
        return removed
    }
}

console.log('CASE 1')
var months = ['Jan', 'March', 'April', 'June'];
var extracted = splice(months, 1, 0, 'Feb') //inserts at index 1
// Inserts at index/starts 1
/*
1. Analyse the curernt situation 
array= ['Jan', 'March', 'April', 'June'] current form
start= 1 it's also the stopping point in the for loop (counting backwards )
deleteCount: 0 items to be removed
item= 'Feb (to be added/replaced)

2. Move items according to what we've been asked (position 1, add Feb, so we have to move the rest)
When i[3]June to i[4] so array[i+1]=5 lenght
array= ['Jan', 'March', 'April', 'June', 'June'] --> create a new position on the right length +1

When i[2]= 'April' now want to it to move to i[3] 
array= ['Jan', 'March', 'April', 'April', 'June'] --> move April to June

 When i[1]= 'March' to i[2] 
array= ['Jan', 'March', 'March', 'April', 'June']  --> move March to April
array= ['Jan', 'Feb', 'March', 'April', 'June'] --> this is what we want

stopper when i<= start (1) 
*/
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


console.log('CASE 2')
var months = ['Jan', 'Feb', 'March', 'April', 'June']
var extracted = splice(months, 4, 1, 'May')
console.log(extracted) //'June'
console.log(months) // ['Jan', 'Feb', 'March', 'April', 'May']

/* Step by Step
1. extract i[4] and add 'May' 
2. this is how it'd look
Iteration 0: ['Jan', 'Feb', 'March', 'April', 'June'

3.
crear variable --> var removed=[] 
removed[removed.length]= array[start] 
array[start]=item
return removed
add May in position array[4] 

Iteration 1: 'Jan', 'Feb', 'March', 'April', 'June' --> add
*/


console.log('CASE 3')
var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October']
var extracted = splice(months, 3, 4, 'X')

console.log(extracted) // ['April', 'May', 'June', 'July']
console.log(months) // ['Jan', 'Feb', 'March', 'X', 'X', 'August', 'September',' October']
/*
1. Initial array ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August']
2. var removed= []
removed[removed.length]= array[start]
removed[removed.length]= array[start+1]
removed[removed.length]= array[start+2]
removed[removed.length]= array[start+3]

3. August: var element = array[start + deleteCount]
array[start + deleteCount] - (deleteCount -1) = element
equal to: array[start +1] = element

September: var element= array[start + deleteCount +1]
array[start + deleteCount +1 - (deleteCount -1)] = element
equal to: array[start +2] = element

October: var element= array[start + deleteCount +2]
array[start + deleteCount +2 - deleteCount -1] = element
equal to: array[start +3] = element

4. After this changes we've copied in positions :
- August in May
- September in June
- October in July

5. Now we have to delete this 3 elemnts.
array.length -= deleteCount -1

6. Insert new elements in start
array[start]= item

7. return removed
*/