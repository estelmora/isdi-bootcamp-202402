var Animal = require('./animal')

function Person(name, birthDate, weight, gender) {
    Animal.call(this, name, birthDate, weight, gender)

    this.talking = false
    this.say = ''
}

Person.prototype = Object.create(Animal.prototype)
Person.prototype.constructor = Person

Person.NOT_WALK = 0
Person.WALK_SLOW = 2
Person.WALK_NORMAL = 4
Person.WALK_FAST = 6
Person.WALK_VERY_FAST = 8

Person.prototype.talk = function () {
    this.talking = true
    if (this.sleeping) {
        this.say = 'sleep talking'
    } else this.say = 'bla bla bla'
}

module.exports = Person