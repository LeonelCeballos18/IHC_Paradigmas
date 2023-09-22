let hammer = new Hammer(document.body)
hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL })
const defaultPosition = 5
let position = 5
let container = document.getElementById(`${position}`)

document.getElementById('reiniciar').addEventListener('click', () => {
    container = document.getElementById(`${defaultPosition}`)
    container.appendChild(img)
})

//Imagen marcianito
const img = document.createElement("img")
img.src = "./sources/img/marcianito.png"
img.alt = "Marcianito"
img.width = 90
container.appendChild(img)

function placeImage(range, restrictions) {
    if (restrictions) {
        position = position + (range)
        container = document.getElementById(`${position}`)
        container.appendChild(img);
    }
}

function validatePosition(typePosition) {
    switch (typePosition) {
        case 'swipeleft':
            placeImage(-3, (!(position >= 1 && position <= 3)))
            break
        case 'swiperight':
            placeImage(3, (!(position >= 7 && position <= 9)))
            break
        case 'swipeup':
            placeImage(-1, (position !== 1 && position !== 4 && position !== 7))
            break
        case 'swipedown':
            placeImage(1, (position !== 3 && position !== 6 && position !== 9))
            break
    }
}


function validatePositionGesture() {
    let position = document.getElementById('gesture').textContent;
    switch (position) {
        case (position === 'paper'): //left
            placeImage(-3, (!(position >= 1 && position <= 3)))
            break
        case (position === 'rock'): // right
            placeImage(3, (!(position >= 7 && position <= 9)))
            break
        case (position === 'victory') || (position === 'thumbs_up'): // up
            placeImage(-1, (position !== 1 && position !== 4 && position !== 7))
            break
        case (position === 'scissors'): //down
            placeImage(1, (position !== 3 && position !== 6 && position !== 9))
            break
    }
}

// Movimiento del marcianito
hammer.on('swipeleft swiperight swipeup swipedown', event => {
    validatePosition(event.type)
})