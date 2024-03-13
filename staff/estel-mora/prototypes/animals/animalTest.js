const assert = require('./assert')
const Animal = require('./animal')

console.log('CASE constructor')
const animal = new Animal('a', new Date(2007, 5, 23), 17)
assert.equalValue(animal.name, 'a')
assert.instanceOf(animal.birthDate, Date)
assert.equalValue(animal.birthDate.getFullYear(), 2007)
assert.equalValue(animal.birthDate.getMonth(), 5)
assert.equalValue(animal.birthDate.getDate(), 23)
assert.equalValue(animal.weight, 17)
assert.equalValue(animal.sleeping, false)
assert.equalValue(animal.eating, '')
assert.equalValue(animal.legsSpeed, Animal.NOT_WALK)
assert.equalValue(animal.energy, 10)


console.log('CASE sleep method')
animal.sleep()
assert.equalValue(animal.sleeping, true)
assert.equalValue(animal.energy, 10)


console.log('CASE wake method')
animal.wakeUp()
assert.equalValue(animal.sleeping, false)


console.log('CASE walk slow')
animal.walk(Animal.WALK_SLOW)
assert.equalValue(animal.legsSpeed, Animal.WALK_SLOW)
assert.equalValue(animal.energy, 9)

console.log('CASE walk fast')
animal.walk(Animal.WALK_FAST)
assert.equalValue(animal.legsSpeed, Animal.WALK_FAST)
assert.equalValue(animal.energy, 6)


console.log('CASE eating')
animal.eat('🍽️')
assert.equalValue(animal.eating, '🍽️')
assert.equalValue(animal.energy, 8)
assert.equalValue(animal.legsSpeed, Animal.NOT_WALK)


console.log('CASE walk very fast')
animal.walk(Animal.WALK_VERY_FAST)
assert.equalValue(animal.legsSpeed, Animal.WALK_VERY_FAST)
assert.equalValue(animal.energy, 4)


console.log('CASE sleep')
animal.sleep()
assert.equalValue(animal.legsSpeed, Animal.NOT_WALK)
assert.equalValue(animal.sleeping, true)
assert.equalValue(animal.energy, 10)


console.log('CASE errors')

console.log('CASE error - name is not string')
{
    let errorThrown
    try {
        const animal = new Animal(undefined, new Date(2007, 5, 23), 17)
    } catch (error) {
        errorThrown = error
    }
    assert.error(errorThrown, 'TypeError', 'name is not a string')
}

console.log('CASE error - birthdate is not a Date')
{
    let errorThrown
    try {
        const animal = new Animal('a', undefined, 17)
    } catch (error) {
        errorThrown = error
    }
    assert.error(errorThrown, 'TypeError', 'birthdate is not a Date')
}

console.log('CASE error - weight is not a number')
{
    let errorThrown
    try {
        const animal = new Animal('a', new Date(2007, 5, 23), undefined)
    } catch (error) {
        errorThrown = error
    }
    assert.error(errorThrown, 'TypeError', 'weight is not a number')
}