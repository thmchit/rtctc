export class Note {
    constructor(type = 'short') {
        this.type = type
    }
    
    static create(string, index) {
        let type = string[index]

        type = type === '*' ? 'none'
        : type === 's' ? 'short'
        : type === 'l' ? 'long'
        : type

        function createShort() {

        }

        function createLong() {
            
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