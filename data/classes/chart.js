export class Chart {
    constructor({ difficulty = 0, lanes = [], transformer = [] } = {}) {
        [ this.difficulty, this.lanes, this.transformer ]
        = [ difficulty, lanes, transformer ]
    }
}