import { Chart } from './classes/chart.js'
import { Map } from './classes/map.js'

const mapList = [
    new Map({
        name: 'LOVE DIVE',
        artist: 'IVE',
        bpm: 118,
        chart: {
            cooperative: new Chart({
                difficulty: 3,
                lanes: [
                    [
                        '',
                        ''
                    ],
                    [
                        '',
                        ''
                    ],
                    [
                        '',
                        ''
                    ],
                    [
                        '',
                        ''
                    ],
                    [
                        '',
                        ''
                    ],
                    [
                        '',
                        ''
                    ]
                ]
            }),
            competitive: new Chart({
                difficulty: 3,
                lanes: [
                    [
                        '',
                        ''
                    ],
                    [
                        '',
                        ''
                    ],
                    [
                        '',
                        ''
                    ],
                    [
                        '',
                        ''
                    ],
                    [
                        '',
                        ''
                    ],
                    [
                        '',
                        ''
                    ]
                ]
            })
        }
    })
]