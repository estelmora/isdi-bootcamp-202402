let ship = document.getElementById('ship')
let enemies = document.querySelectorAll('enemies')
let x = 50; // set initial width position
let y = 80; // set initial height position

ship.style.left = x + "vw"
ship.style.top = y + "vh"

document.onkeydown = function (event) {
    if (event.key === "ArrowLeft" && x > 5)
        x = x - 2
    else if (event.key === "ArrowRight" && x < 85)
        x = x + 2

    ship.style.left = x + "vw";
    makeVerticalMovement(event)
};
//function to make vertical movement
function makeVerticalMovement(event) {
    if (event.key === "ArrowUp" && y > 0)
        y = y - 2; //disminueix l'espai entre el top i la nau -2
    else if (event.key === "ArrowDown" && y < 83)
        y = y + 2;
    ship.style.top = y + "vh"
    let shipRect = ship.getBoundingClientRect()
    let enemiesRect = enemies.getBoundingClientRect()

    console.log(shipRect, enemiesRect)

    if (shipRect.left < enemiesRect.right &&
        shipRect.right > enemiesRect.left &&
        shipRect.top < enemiesRect.bottom - 20 &&
        shipRect.bottom > enemiesRect.top) {
        ship.src = 'images/kitten2.png'
        enemies.src = "images/kitten.png"
    }
    console.log('collision detected')
}


// setTimeout(function () {
//     ship.style.display = "none"
//     enemies.style.display = "none"
// }, 2000)


