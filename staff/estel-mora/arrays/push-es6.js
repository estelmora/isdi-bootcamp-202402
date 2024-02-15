delete Array.prototype.push
//Moderno, sin arguments utilizando REST OPERATOR

function push(array, ...elements) {
    if (elements.length > 0)
        array[arrayl.length] = elements

    return array.length


}

// CASE 1
const nums = [100, 200, 300, 400, 500]

const length = push(nums, 600)

console.log(length)
// 6
console.log(nums)
// [100, 200, 300, 400, 500, 600]


// CASE 2
const animals = ['pigs', 'goats', 'sheep'];

const count = push(animals, 'cows');

console.log(count);
// 4
console.log(animals);
// ["pigs", "goats", "sheep", "cows"]


// CASE 3
{ //las llaves nos permiten bloaquear este fragmento y dentro se pueden declarar variables que no afectan fuera de este "caso"
    const sports = ['soccer', 'baseball']

    const length = push(sports)

    console.log(length)
    // 2
    console.log(sports)
    // ['soccer', 'baseball']
}


{
    // CASE 4
    const sports = ['soccer', 'baseball']

    const length = push(sports, undefined)

    console.log(length)
    // 3
    console.log(sports)
    // ['soccer', 'baseball', undefined]
}