import { Game } from '../../data/game.js'

const game = new Game()
window.onload = game.display()

window.shiftSelect = (diff) => {
    game.index += diff
    game.display()
}

window.play = (mode) => {
    game.play(mode)
}