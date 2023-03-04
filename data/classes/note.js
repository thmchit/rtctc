export class Note {
    constructor(type = 'short') {
        this.type = type
    }
    
    static create(chart, lane, direction, index) {
        const notes = chart.lanes[lane][direction]
        const type = notes[index] === '*' ? 'none'
        : notes[index] === 's' ? 'short'
        : notes[index] === 'l' ? 'long'
        : notes[index]

        function createShort() {

        }

        function createLong() {
            if (index > 0 && notes[index] == 'l') return
        }

        switch(type) {
            case 'none':
                return
            case 'short':
                createShort()
                break
            case 'long':
                createLong()
                break

        }
    }
}