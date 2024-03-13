var Pet = require('./Pet')

function Cat(owner, name, birthDate, weight, gender) {
    Pet.call(this, owner, name, birthDate, weight, gender)

    this.talking = false
    this.say = ''
}
Cat.prototype = Object.create(Pet.prototype)
Cat.prototype.constructor = Cat

Cat.NOT_WALK = 0
Cat.WALK_SLOW = 2
Cat.WALK_NORMAL = 4
Cat.WALK_FAST = 6
Cat.WALK_VERY_FAST = 8


Cat.prototype.meow = function () {
    if (this.sleeping === false)
        this.say = 'meow meow'
    else if (this.gender === 'M') this.say = "Shhh... He's sleeping"
    else this.say = "Shhh... She's sleeping"
}



module.exports = Cat