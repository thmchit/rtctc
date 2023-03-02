import { Chart } from './classes/chart.js'
import { Map } from './classes/map.js'

const mapList = [
    new Map({
        name: 'LOVE DIVE',
        artist: 'IVE',
        bpm: 118,
        beatSplit: 8,
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
    }),
    new Map({
        name: 'don\'t fight the music',
        artist: 'Sekai',
        bpm: 200,
        beatSplit: 8,
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
    }),
    new Map({
        name: '염라',
        artist: '달의 하루',
        bpm: 132,
        beatSplit: 8,
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

export { mapList }