export class Note {
    constructor(type = 'short') {
        this.type = type
    }
    
    static create(chart, lane, direction, index) {
        const notes = chart.lanes[lane][direction]
        direction = direction === 1 ? 'up' : 'down'
        const type = notes[index] === '*' ? 'none'
        : notes[index] === 's' ? 'short'
        : notes[index] === 'l' ? 'long'
        : notes[index]

        function createShort() {
            const note = document.createElement('div')
            note.setAttribute('class', `short note ${direction}`)
            document.getElementById(`lane${lane}`).appendChild(note)
            setTimeout(() => {note.remove()}, 3000)
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