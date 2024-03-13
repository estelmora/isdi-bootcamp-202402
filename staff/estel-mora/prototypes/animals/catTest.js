const Animal = require('./animal')
var assert = require('./assert')
var Cat = require('./cat')
var Person = require('./person')
var Pet = require('./pet')


console.log('TEST Cat')

console.log('CASE constructor')
var owner = new Person('Luca', new Date(1999, 2, 11), 55, 'F')
var cat = new Cat(owner, 'Gio', new Date(2020, 10, 4), 20, 'M')
assert.equalValue(cat.name, 'Gio')
assert.instanceOf(cat.birthDate, Date)
assert.equalValue(cat.birthDate.getFullYear(), 2020)
assert.equalValue(cat.birthDate.getMonth(), 10)
assert.equalValue(cat.birthDate.getDate(), 4)
assert.equalValue(cat.weight, 20)
assert.equalValue(cat.sleeping, false)
assert.equalValue(cat.eating, '')
assert.equalValue(cat.legsSpeed, Cat.NOT_WALK)
assert.equalValue(cat.energy, 10)

assert.instanceOf(cat, Cat)
assert.instanceOf(cat, Pet)
assert.instanceOf(cat, Animal)


console.log('CASE meow when awake')
cat.sleeping = true
cat.meow()
assert.equalValue(cat.say, "Shhh... He's sleeping")

console.log('CASE meow')
cat.sleeping = false
cat.meow()
assert.equalValue(cat.say, "meow meow")


console.log('CASE meow when awake')
cat.sleeping = true
cat.meow()
assert.equalValue(cat.say, "Shhh... He's sleeping")

console.log('CASE meow')
cat.sleeping = false
cat.meow()
assert.equalValue(cat.say, "meow meow")