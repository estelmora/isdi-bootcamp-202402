class Animal {
    constructor(name, birthDate, weight, gender) {
        if (typeof name !== 'string') throw TypeError('name is not a string')
        if (!(birthDate instanceof Date)) throw TypeError('birthdate is not a Date')
        if (typeof weight !== 'number') throw TypeError('weight is not a number')
        this.name = name
        this.birthDate = birthDate
        this.weight = weight
        this.gender = gender
        this.sleeping = false
        this.eating = ''
        this.legsSpeed = Animal.NOT_WALK
        this.energy = 10
        this.age = 0
    }

    static NOT_WALK = 0
    static WALK_SLOW = 2
    static WALK_NORMAL = 4
    static WALK_FAST = 6
    static WALK_VERY_FAST = 8


    sleep() {
        this.legsSpeed = Animal.NOT_WALK
        this.sleeping = true
        this.energy = 10
    }

    wakeUp() {
        this.sleeping = false
    }

    walk(speed) {
        this.legsSpeed = speed
        if (speed === Animal.WALK_SLOW) {
            this.energy -= 1
        } else if (speed === Animal.WALK_FAST) {
            this.energy -= 3
        } else if (speed === Animal.WALK_VERY_FAST) {
            this.energy -= 4
        }
    }

    eat(food) {
        this.legsSpeed = Animal.NOT_WALK
        this.eating = food
        this.energy += 2
    }
}

module.exports = Animal