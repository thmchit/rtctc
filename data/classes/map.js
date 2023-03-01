import { Chart } from './chart.js'

export class Map {
    constructor({
        name = '',
        artist = '',
        bpm = 0,
        chart = {
            cooperative: new Chart(),
            competitive: new Chart()
        }
    } = {}) {
        [ this.name, this.artist, this.bpm, this.chart ]
        = [ name, artist, bpm, chart ]
    }
}