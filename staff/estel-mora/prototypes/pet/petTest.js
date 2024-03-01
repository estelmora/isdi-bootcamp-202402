var Pet = require('./pet')

console.log('Pet Test')

var pet = new Pet('cat', 'orange')

console.assert(pet.animal === 'cat')
console.assert(pet.color === 'orange', 'my pet is orange')


console.log('CASE  asleep')

pet.goToSleep()
console.assert(pet.isAwake === false, 'the pet is asleep')

console.log('CASE  bark')
pet.bark('guau')
console.assert(pet.barking === true, 'the dog is barking')

console.log('CASE eat ')
var horse = new Pet('horse', 'black')
horse.eat()
console.assert(horse.eating === 'the horse is eating', 'yes is eating')

console.log('CASE walk ')
var horse = new Pet('horse', 'black')
horse.walk('left')

horse.walkDirection = 'forward'
console.assert(horse.walkDirection === 'left', 'the horse is walking to the left')