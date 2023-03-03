import { game } from '../../data/game.js'

window.onload = game.displaySelection()

window.shiftSelect = (diff) => {
    game.index += diff
    game.displaySelection()
}

window.play = (mode) => {
    game.play(mode)
}