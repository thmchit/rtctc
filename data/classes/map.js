import { Chart } from './chart.js'

export class Map {
    constructor({
        name = '',
        artist = '',
        bpm = 0,
        chart = {
            /** @description lanes: length 6 Array, each has 2 String*/
            cooperative: new Chart(),
            /** @description lanes: length 6 Array, each has 2 SAME String*/
            competitive: new Chart()
        }
    } = {}) {
        [ this.name, this.artist, this.bpm, this.chart ]
        = [ name, artist, bpm, chart ]
    }
}