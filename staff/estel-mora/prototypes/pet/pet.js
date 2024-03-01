function Pet(animal, color) {

    this.animal = animal
    this.color = color
    this.status = 'awake'
    this.isAwake = true
    this.barking = false
    this.eating = ''
    this.walkDirection = ''

}

Pet.prototype.goToSleep = function () {
    this.isAwake = false
}

Pet.prototype.bark = function (sound) {
    if (sound !== 'guau') {
        throw new Error('is not barking')
    } else {
        this.barking = true
    }
}

Pet.prototype.eat = function () {
    if (this.status === 'awake') {
        this.eating = 'the horse is eating'
    }
}

Pet.prototype.walk = function (direction) {
    if (this.walkDirection === 'forward') {
        this.walkDirection = 'forward-left'
    }
}

module.exports = Pet
