function Car(brand, model, year, color, doors, fuelType, transmission, maxGears) {
    this.brand = brand
    this.model = model
    this.color = color
    this.year = year
    this.doors = doors
    this.fuelType = fuelType
    this.transmission = transmission
    this.maxGears = maxGears

    this.gear = 0
    this.speed = 0
    this.acceleration = 0
    this.direction = ''
    this.steering = 0
    this.status = 'off'
    this.deposit = 0

}

Car.prototype.fuel = function (load) {
    if (typeof load !== 'number')
        throw new TypeError(load + 'is not a number')
    if (load < 0 || load > 100)
        throw new RangeError(load + 'is more than 100 or less than 0')

    this.deposit = load
}

Car.prototype.start = function () {
    this.status = 'on'
}

Car.prototype.stop = function () {
    this.status = 'off'
}

Car.prototype.changeGear = function (gear) {

    this.gear = gear
    if (gear < this.maxGears + 1 && gear > 0) {
        this.direction = 'forward'
    }
    if (gear === 0) {
        this.direction = ''
    }
    if (gear === -1) {
        this.direction = 'backward'
    }
    if (gear < -1 && gear > this.maxGears) {
        throw new RangeError(gear + 'is not a gear')
    }
}

Car.prototype.speedUp = function (acceleration) {
    this.speed = acceleration
    this.acceleration = acceleration
    if (acceleration > 0 && this.gear > 0) {
        this.direction = 'forward'
    }
    if (acceleration > 0 && this.gear < 0) {
        this.direction = 'backward'
    }
    if (acceleration < 0) {
        throw new RangeError(acceleration + 'is not working')
    }

}
Car.prototype.changeSteering = function (rotation) {
    this.steering = rotation
    if (this.direction === 'forward' || this.gear > 0) {
        if (rotation > 0) {
            this.direction = 'forward-right'
        }
        if (rotation < 0) {
            this.direction = 'forward-left'
        }
    }
    if (this.direction === 'backward' || this.gear === -1) {
        if (rotation > 0) {
            this.direction = 'backward-right'
        }
        if (rotation < 0) {
            this.direction = 'backward-left'
        }
    }
}


module.exports = Car