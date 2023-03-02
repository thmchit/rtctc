import { mapList } from './mapList.js'

export class Game {
    #index
    constructor(index = 0) {
        this.#index = Game.getIndex(index)
    }

    static getIndex(index) {
        if (!(0 <= index && index < mapList.length)) {
            return mapList.length % index
        }
        return index
    }
    get index() {
        return this.#index
    }
    set index(index) {
        this.#index = Game.getIndex(index)
    }

    display(index = this.#index) {
        displayAlbumCover()
        displayDescription()

        function displayAlbumCover() {
            const albums = document.getElementsByClassName('album')
            const [ current, previous, next ]  = [ ...albums ]

            current.style.backgroundImage
            = `url("../../data/images/album/${mapList[ Game.getIndex(index) ].name}.png")`
            previous.style.backgroundImage
            = `url("../../data/images/album/${mapList[ Game.getIndex(index - 1) ].name}.png")`
            next.style.backgroundImage
            = `url("../../data/images/album/${mapList[ Game.getIndex(index + 1) ].name}.png")`
        }

        function displayDescription() {
            for (let description of document.getElementsByClassName('description')) {
                description.textContent = `${mapList[ Game.getIndex(index) ].name}`
            }
        }
    }
}
