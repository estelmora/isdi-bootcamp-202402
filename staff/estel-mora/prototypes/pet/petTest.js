var pet = require('./pet')

console.log('Pet Test')

var cat = newCat('Siria', 2015, 'Home', 'orange and white', 4, 'small', 'salmon and tuna', '5kg')
console.assert(car.brand === 'Ferrari', 'brand is Ferrari')

console.assert(cat.name === 'Siria', 'name is Siria')
console.assert(cat.BornYear === 2015, 'born in 2015')
console.asssert(cat.LivesAt === 'Home', 'lives at home')
console.assert(cat.colors === 'orange and white', 'fur is orange and white')
console.assert(cat.legs === 4, 'has 4 legs')
console.assert(cat.size === 'small', 'is a small cat')
console.assert(cat.FavouriteDish === 'salmon and tuna', 'favorite meal is salmon and tuna')
console.assert(cat.weight === '5kg', ' she weights 5kg')
console.assert(cat.initialSpeed === 0)
console.assert(cat.maxspeed === 30)
console.assert(cat.initialJump === 0)
console.assert(cat.maxJumpHeight === 2)
console.assert(cat.status === asleep)

console.log('CASE method sleep')
console.assert(cat.status === 'awake')
cat.asleep()
