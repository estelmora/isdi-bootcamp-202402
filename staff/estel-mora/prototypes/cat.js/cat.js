function Cat(name, lives, bornYear, legs, furColor) {
    this.name = name
    this.lives = lives
    this.bornYear = bornYear
    this.legs = legs
    this.furColor = furColor

    this.status = 'asleep'
    this.speed = 0
    this.maxSpeed = maxSpeed
    this.jump = 0
    this.maxJump = this.maxJump
}

Cat.prototype.morning = function () {
    this.status = 'the cat is awake';
};

Cat.prototype.night = function () {
    this.status = 'the cat is sleeping';
};


Cat.prototype.speed(jump){
    if (speed > 20) {
        this.jump = 'he is not prepare to jump'
    };
};
module.exports = Cat