import { Chart } from './classes/chart.js'
import { Map } from './classes/map.js'

const mapList = [
    new Map({
        name: 'LOVE DIVE',
        artist: 'IVE',
        bpm: 118,
        beatSplit: 4,
        volume: 1,
        chart: {
            cooperative: new Chart({
                difficulty: 3,
                lanes: [
                    [
                        'll**s*****s*s***ll**s*****s*s***ll**s*****s*s***',
                        '************************************************'
                    ],
                    [
                        '************************************************',
                        's***s*****s*s***s***s*****s*s***s***s*****s*s***'
                    ],
                    [
                        's***s*****s*s***s***s*****s*s***s***s*****s*s***',
                        '************************************************'
                    ],
                    [
                        '************************************************',
                        's***s*****s*s***s***s*****s*s***s***s*****s*s***'
                    ],
                    [
                        's***s*****s*s***s***s*****s*s***s***s*****s*s***',
                        '************************************************'
                    ],
                    [
                        '************************************************',
                        'll**s*****s*s***ll**s*****s*s***ll**s*****s*s***'
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
        name: '?????? ?????? ????????????.',
        artist: '??????',
        bpm: 93,
        beatSplit: 8,
        volume: 1,
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
        name: '??????',
        artist: '?????? ??????',
        bpm: 132,
        beatSplit: 8,
        volume: 1,
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