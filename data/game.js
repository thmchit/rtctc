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

    get map() {
        return mapList[this.#index]
    }

    display(index = this.#index) {
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
            for (let description of document.getElementsByClassName('description')) {
                let content = `${ this.map.artist } - ${ this.map.name } <br/>`
                if(this.map.chart.competitive !== undefined) {
                    content += `<font color='red'>경쟁:</font> 난이도${ this.map.chart.competitive.difficulty } `
                }
                if(this.map.chart.cooperative !== undefined) {
                    content += `<font color='green'>협동:</font> 난이도${ this.map.chart.cooperative.difficulty } `
                }

                description.innerHTML = content
            }
        }

        displayAlbumCover()
        displayDescription()
    }
}
