var Animal = require('./animal')
var Person = require('./Person')
var Pet = require('./pet')

var assert = require('./assert')

var person = new Person('Estel', new Date(1999, 10, 3), 44, 'F')
var pet = new Pet(person, 'T', new Date(2015, 8, 4), 5, 'F')

console.log('TEST: Pet')
console.log('constructor')
assert.instanceOf(pet, Pet)
assert.equalValue(pet.constructor, Pet)
assert.instanceOf(pet, Animal)