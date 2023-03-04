import { Note } from './classes/note.js'
import { mapList } from './mapList.js'
// Howl and Howler is imported in html (IMPORTANT)
class Game {
    #index
    constructor() {
        const url = new URL(window.location.href)
        const params = new URLSearchParams(url.search)

        if (params.get('index') !== undefined) {
            this.#index = Game.getIndex( params.get('index') )
            if (params.get('mode') != 'undefined') {
                this.mode = params.get('mode')
            }
        } else {
            this.#index = 0
        }
    }

    static getIndex(index) {
        index = Number(index)
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
            const [ current, decoration, previous, next ]  = [ ...albums ]

            current.style.backgroundImage
            = `url("../../data/images/album/${ this.map.name }.png")`
            previous.style.backgroundImage
            = `url("../../data/images/album/${ mapList[ Game.getIndex(index - 1) ].name }.png")`
            next.style.backgroundImage
            = `url("../../data/images/album/${ mapList[ Game.getIndex(index + 1) ].name }.png")`
        }

        const displayDescription = () => {
            let titleContent = `${ this.map.artist } - ${ this.map.name } <br/>`
            let difficultyContent = ''
            if (hasCooperativeMode) {
                difficultyContent += `<font color='#38BAB7'>협동:</font> 난이도${ this.map.chart.cooperative.difficulty } `
            }
            if (hasCompetitiveMode) {
                difficultyContent += `<font color='#72A9F1'>경쟁:</font> 난이도${ this.map.chart.competitive.difficulty } `
            }

            for (let title of document.getElementsByClassName('title')) {
                title.innerHTML = titleContent
            }
            for (let difficulty of document.getElementsByClassName('difficulty')) {
                difficulty.innerHTML = difficultyContent
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
        if (mode === undefined) return
        this.mode = mode
        window.location.href = `../play/index.html?index=${ this.index }&mode=${ this.mode }`
    }

    play(mode = this.mode) {
        if (mode === undefined) return
        document.body.onkeydown = null
        
        const playMusic = () => {
            const music = new Howl({
                src: [`../../data/music/${ this.map.name }.mp3`],
                volume: this.map.volume
            })

            music.play()
        }

        const playNote = () => {
            let noteIndex = 0
            const noteInterval = setInterval(() => {
                const endOfNote = (noteIndex >= this.map.chart[this.mode].lanes[0][0].length)
                if (endOfNote) clearInterval(noteInterval)

                for (let lane = 0; lane < 6; lane ++) {
                    for (let direction = 0; direction < 2; direction ++) {
                        Note.create( this.map.chart[this.mode], lane, direction, noteIndex )
                    }
                }
                noteIndex ++
            }, this.map.bpm / this.map.bpmSplit)
        }

        playMusic()
        playNote()
    }
}

export { Game }