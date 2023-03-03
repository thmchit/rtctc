import { mapList } from './mapList.js'
// Howl and Howler is imported in html (IMPORTANT)

class Game {
    #index
    constructor(index = 0) {
        this.#index = Game.getIndex(index)
    }

    static getIndex(index) {
        while (index < 0) index += mapList.length
        while (index >= mapList.length) index -= mapList.length
        return index
    }
    get index() {
        return this.#index
    }
    set index(index) {
        this.#index = Game.getIndex(index)
    }

    get map() {
        return mapList[ this.#index ]
    }

    shiftSelection(diff) {
        this.index += diff
        this.displaySelection()
    }
    displaySelection(index = this.index) {
        const hasCooperativeMode = (this.map.chart.cooperative !== undefined)
        const hasCompetitiveMode = (this.map.chart.competitive !== undefined)

        const displayAlbumCover = () => {
            const albums = document.getElementsByClassName('album')
            const [ current, previous, next ]  = [ ...albums ]

            current.style.backgroundImage
            = `url("../../data/images/album/${ this.map.name }.png")`
            previous.style.backgroundImage
            = `url("../../data/images/album/${ mapList[ Game.getIndex(index - 1) ].name }.png")`
            next.style.backgroundImage
            = `url("../../data/images/album/${ mapList[ Game.getIndex(index + 1) ].name }.png")`
        }

        const displayDescription = () => {
            let content = `${ this.map.artist } - ${ this.map.name } <br/>`
            if (hasCooperativeMode) {
                content += `<font color='#38BAB7'>협동:</font> 난이도${ this.map.chart.cooperative.difficulty } `
            }
            if (hasCompetitiveMode) {
                content += `<font color='#72A9F1'>경쟁:</font> 난이도${ this.map.chart.competitive.difficulty } `
            }

            for (let description of document.getElementsByClassName('description')) {
                description.innerHTML = content
            }
        }

        const displaySelectMode = () => {
            for (let selectCoop of document.getElementsByClassName('cooperative')) {
                selectCoop.style.display = hasCooperativeMode ? 'block' : 'none'
            }
            for (let selectComp of document.getElementsByClassName('competitive')) {
                selectComp.style.display = hasCompetitiveMode ? 'block' : 'none'
            }
        }

        displayAlbumCover()
        displayDescription()
        displaySelectMode()
    }
    select(mode) {
        window.location.href = '../play/index.html'
    }

    play(mode) {
    }
}

const game = new Game()
window.game = game
export { game }