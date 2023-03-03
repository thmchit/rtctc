import { Chart } from './chart.js'

export class Map {
    constructor({
        name = '',
        artist = '',
        /** @description decide 1 beat time length */
        bpm = 0,
        /** @description 1 beat / beatSplit is the time of one note */
        beatSplit = 8,
        volume = 1,
        chart = {
            /** @description lanes: length 6 Array, each has 2 String */
            cooperative: new Chart(),
            /** @description lanes: length 6 Array, each has 2 SAME String */
            competitive: new Chart()
        }
    } = {}) {
        [ this.name, this.artist, this.bpm, this.beatSplit, this.chart ]
        = [ name, artist, bpm, this.beatSplit, chart ]
    }
}