var Animal = require('./animal')
var Person = require('./person')

function Pet(owner, name, birthDate, weight, gender) {
    Animal.call(this, name, birthDate, weight, gender)

    if (!(owner instanceof Person)) throw TypeError('owner is not a Person')
    this.owner = owner

}

Pet.prototype = Object.create(Animal.prototype)
Pet.prototype.constructor = Pet

module.exports = Pet