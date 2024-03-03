var cat = require('./cat')

console.log('CAT Testing')
console.log('CASE CONSTRUCTOR')

var cat = new Cat('Pebrot', 'house', 2015, 4, 'orange')

console.assert(cat.name === 'Pebrot', 'name is Pebrot')
console.assert(cat.lives === 'house', 'lives in a house')
console.assert(cat.bornYear === 2015, 'born in 2015')
console.assert(cat.legs === 4, 'has 4 legs')
console.assert(cat.furcolor === orange, 'her fur is orange')

console.assert(cat.status === 'asleep', 'she is asleep')
console.assert(cat.speed === 0, 'speed is 0')
console.assert(cat.maxSpeed === 30, 'her max speed is 30')
console.assert(cat.jump === 0, 'she is not jumping')
console.assert(cat.maxJump === 3, 'she can jump 3m')

console.log('cat in the MORNING')
var cat = new Cat('Pebrot', 'house', 2015, 4, 'orange')
cat.morning()
console.assert(cat.status === 'awake', 'the cat is awake')


console.log('cat at NIGTH')
var cat = new Cat('Pebrot', 'house', 2015, 4, 'orange')
cat.night()
console.assert(cat.status === 'asleep', 'the cat is sleeping')

console.log('cat at NIGTH')
var cat = new Cat('Pebrot', 'house', 2015, 4, 'orange')
cat.speed(10)
cat.speed = 10
cat.jump = 0
console.assert(cat.speed === 10, 'cat is walking fast')
console.assert(cat.jump === 0, 'he is not prepare to jump')

