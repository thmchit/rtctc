export class Note {
    constructor(type = 'short') {
        this.type = type
    }
    
    static create(chart, lane, direction, index, period) {
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
            if (index > 0 && notes[index - 1] === 'l') return
            let length = 1
            while(notes[index] === 'l') {
                length ++
                index ++
            }
            const height = 0.05 * length * period - 6

            const note = document.createElement('div')
            note.setAttribute('class', `long note ${direction}`)
            note.style.height = `${height}%`
            if (direction === 'down') {
                note.style.bottom = '100%'
                setTimeout(() => {
                    note.style.animation = `${length * period - 60}ms linear fade-down`
                }, 2000)
            } else if (direction === 'up') {
                note.style.top = '100%'
                setTimeout(() => {
                    note.style.animation = `${length * period - 60}ms linear fade-up`
                }, 2000)
            }
            document.getElementById(`lane${lane}`).appendChild(note)
            setTimeout(() => {note.remove()}, 3000)
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