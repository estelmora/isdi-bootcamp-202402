var Animal = require('./animal')
var assert = require('./assert')
var Person = require('./person')

console.log('TEST Person')

console.log('CASE constructor')
var person = new Person('Judit', new Date(1999, 11, 27), 50, 'F')
assert.equalValue(person.name, 'Judit')
assert.instanceOf(person.birthDate, Date)
assert.equalValue(person.birthDate.getFullYear(), 1999)
assert.equalValue(person.birthDate.getMonth(), 11)
assert.equalValue(person.birthDate.getDate(), 27)
assert.equalValue(person.weight, 50)
assert.equalValue(person.sleeping, false)
assert.equalValue(person.eating, '')
assert.equalValue(person.legsSpeed, Person.NOT_WALK)
assert.equalValue(person.energy, 10)
assert.equalValue(person.talking, false)

assert.instanceOf(person, Person)
assert.instanceOf(person, Animal)


console.log('CASE sleep method')
person.sleep()
assert.equalValue(person.sleeping, true)
assert.equalValue(person.energy, 10)


console.log('CASE wake method')
person.wakeUp()
assert.equalValue(person.sleeping, false)


console.log('CASE walk slow')
person.walk(Person.WALK_SLOW)
assert.equalValue(person.legsSpeed, Person.WALK_SLOW)
assert.equalValue(person.energy, 9)

console.log('CASE walk fast')
person.walk(Person.WALK_FAST)
assert.equalValue(person.legsSpeed, Person.WALK_FAST)
assert.equalValue(person.energy, 6)


console.log('CASE eating')
person.eat('🍽️')
assert.equalValue(person.eating, '🍽️')
assert.equalValue(person.energy, 8)
assert.equalValue(person.legsSpeed, Person.NOT_WALK)


console.log('CASE walk very fast')
person.walk(Person.WALK_VERY_FAST)
assert.equalValue(person.legsSpeed, Person.WALK_VERY_FAST)
assert.equalValue(person.energy, 4)


console.log('CASE sleep')
person.sleep()
assert.equalValue(person.legsSpeed, Person.NOT_WALK)
assert.equalValue(person.sleeping, true)
assert.equalValue(person.energy, 10)


console.log('CASE talk when asleep')
person.talk()
assert.equalValue(person.say, 'sleep talking')


console.log('CASE talk')
person.sleeping = false
person.talk()
assert.equalValue(person.say, 'bla bla bla')