let ship = document.getElementById('ship')
let enemies = document.querySelectorAll('.enemies')
console.log(enemies)
let x = 50; // set initial width position
let y = 80; // set initial height position

ship.style.left = x + "vw"
ship.style.top = y + "vh"

document.onkeydown = function (event) {

    updateVerticalMovement(event) //control y movement & collision
    updateHorizontalMovement(event) //control x movement 
};
function updateHorizontalMovement(event) {
    if (event.key === "ArrowLeft" && x > 5)
        x = x - 2
    else if (event.key === "ArrowRight" && x < 85)
        x = x + 2

    ship.style.left = x + "vw";
}
//function to make vertical movement
function updateVerticalMovement(event) {
    if (event.key === "ArrowUp" && y > 0)
        y = y - 2; //disminueix l'espai entre el top i la nau -2
    else if (event.key === "ArrowDown" && y < 83)
        y = y + 2;
    ship.style.top = y + "vh"
    let shipRect = ship.getBoundingClientRect()

    for (let i = enemies.length - 1; i > -1; i--) {
        let enemiesRect = enemies[i].getBoundingClientRect()
        if (shipRect.left < enemiesRect.right &&
            shipRect.right > enemiesRect.left &&
            shipRect.top < enemiesRect.bottom - 20 &&
            shipRect.bottom > enemiesRect.top) {
            ship.src = 'images/kitten2.png'
            enemies[i].src = "images/kitten.png"
        }
        console.log('collision detected')

    }

}


// setTimeout(function () {
//     ship.style.display = "none"
//     enemies.style.display = "none"
// }, 2000)


