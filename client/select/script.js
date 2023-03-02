import { Game } from '../../data/game.js'

const game = new Game()
window.onload = game.displaySelection()

window.shiftSelect = (diff) => {
    game.index += diff
    game.displaySelection()
}

window.play = (mode) => {
    game.play(mode)
}