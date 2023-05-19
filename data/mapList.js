/// <reference path="../node_modules/rhy-game/dist/rhy-game.js"/>
const mapList = [
    new Song({
        info: {
            title: 'LOVE DIVE',
            artist: 'IVE',
            music: '../../data/music/LOVE DIVE.mp3',

            bpm: 118,
            split: 16,
            difficulty: {
                'cooperative': 3,
                'competitive': 3
            },

            cover: '../../data/images/album/LOVE DIVE.png'
        },
        chart: {
            cooperative: [
                {
                    d0: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',

                    u0: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|'
                }
            ],
            competitive: [
                {
                    d0: '|s***|****|****|****|s***|****|****|****|s***|****|****|****|s***|****|****|****|',
                    d1: '|****|****|****|****|****|****|**s*|****|****|****|**s*|****|****|****|****|****|',
                    d2: '|****|****|**s*|****|****|****|****|****|****|****|****|****|****|****|**s*|****|',
                    d3: '|****|****|****|s***|****|****|****|****|****|****|****|****|****|****|****|s***|',
                    d4: '|****|****|****|****|****|****|****|s***|****|****|****|s***|****|****|****|****|',
                    d5: '|****|s***|****|****|****|s***|****|****|****|s***|****|****|****|s***|****|****|',

                    u0: '|s***|****|****|****|s***|****|****|****|s***|****|****|****|s***|****|****|****|',
                    u1: '|****|****|****|****|****|****|**s*|****|****|****|**s*|****|****|****|****|****|',
                    u2: '|****|****|**s*|****|****|****|****|****|****|****|****|****|****|****|**s*|****|',
                    u3: '|****|****|****|s***|****|****|****|****|****|****|****|****|****|****|****|s***|',
                    u4: '|****|****|****|****|****|****|****|s***|****|****|****|s***|****|****|****|****|',
                    u5: '|****|s***|****|****|****|s***|****|****|****|s***|****|****|****|s***|****|****|'
                },
                {
                    d0: '|**s*|****|****|****|s***|****|****|****|****|****|****|s***|**s*|****|****|****|',
                    d1: '|****|****|**s*|****|****|****|s***|****|****|s***|****|****|****|****|**s*|****|',
                    d2: '|****|**s*|****|****|****|s***|****|s***|****|****|s***|****|****|**s*|****|**s*|',
                    d3: '|****|****|s***|****|****|**s*|****|**s*|****|**s*|****|****|****|s***|****|s***|',
                    d4: '|****|s***|****|****|****|****|**s*|****|****|****|**s*|****|****|****|s***|****|',
                    d5: '|****|****|****|s***|**s*|****|****|****|**s*|****|****|****|s***|****|****|****|',

                    u0: '|**s*|****|****|****|s***|****|****|****|****|****|****|s***|**s*|****|****|****|',
                    u1: '|****|****|**s*|****|****|****|s***|****|****|s***|****|****|****|****|**s*|****|',
                    u2: '|****|**s*|****|****|****|s***|****|s***|****|****|s***|****|****|**s*|****|**s*|',
                    u3: '|****|****|s***|****|****|**s*|****|**s*|****|**s*|****|****|****|s***|****|s***|',
                    u4: '|****|s***|****|****|****|****|**s*|****|****|****|**s*|****|****|****|s***|****|',
                    u5: '|****|****|****|s***|**s*|****|****|****|**s*|****|****|****|s***|****|****|****|'
                },
                {
                    d0: '|****|s***|****|****|****|****|s***|****|****|****|****|llll|****|****|****|****|',
                    d1: '|****|****|s***|llll|****|****|****|****|****|****|s***|****|****|****|****|llll|',
                    d2: '|****|****|**s*|****|****|****|****|llll|****|****|****|****|****|s*s*|****|****|',
                    d3: '|****|****|****|****|s*s*|****|****|****|****|s***|****|****|****|****|s*s*|****|',
                    d4: '|****|**s*|****|llll|****|****|**s*|****|****|**s*|****|****|s*s*|****|****|****|',
                    d5: '|****|****|****|****|****|s*s*|****|llll|****|****|**s*|llll|****|****|****|****|',

                    u0: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|'
                },
                {
                    d0: '|****|llll|****|****|****|****|****|****|****|****|llll|****|****|****|****|****|',
                    d1: '|****|****|llll|****|****|****|****|****|****|****|****|llll|****|****|****|****|',
                    d2: '|****|****|****|llll|****|****|****|****|****|llll|****|****|llll|llll|****|****|',
                    d3: '|****|llll|****|****|llll|llll|****|****|****|****|llll|****|****|****|****|****|',
                    d4: '|****|****|****|llll|****|****|****|****|****|****|****|llll|****|****|****|****|',
                    d5: '|****|****|llll|****|****|****|****|****|****|llll|****|****|****|****|****|****|',

                    u0: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|'
                },
                {
                    d0: '|****|****|****|****|****|****|****|****|****|****|llll|****|****|****|****|****|',
                    d1: '|****|****|****|****|****|**ll|llll|****|llll|****|****|****|s***|****|****|****|',
                    d2: '|****|****|llll|****|****|****|****|s*s*|****|****|****|**s*|**s*|**s*|****|**s*|',
                    d3: '|****|****|****|****|llll|ll**|****|s*s*|****|**s*|****|****|****|s***|s***|s***|',
                    d4: '|****|llll|****|****|****|****|****|****|llll|****|****|****|****|****|**s*|****|',
                    d5: '|****|****|****|llll|****|****|****|****|****|****|llll|****|****|****|****|****|',

                    u0: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|'
                }
            ]
        }
    }),
    new Song({
        info: {
            title: '다신 보지 않을거야.',
            artist: '준이',
            music: '../../data/music/다신 보지 않을거야..mp3',

            bpm: 93,
            split: 32,
            difficulty: {
                'cooperative': 3,
                'competitive': 3
            },

            cover: '../../data/images/album/다신 보지 않을거야..png'
        },
        chart: {
            cooperative: [
                {
                    d0: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',

                    u0: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|'
                }
            ],
            competitive: [
                {
                    d0: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',

                    u0: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|'
                }
            ]
        }
    }),
    new Song({
        info: {
            title: '염라',
            artist: '달의 하루',
            music: '../../data/music/염라.mp3',

            bpm: 132,
            split: 32,
            difficulty: {
                'cooperative': 3,
                'competitive': 3
            },

            cover: '../../data/images/album/염라.png'
        },
        chart: {
            cooperative: [
                {
                    d0: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',

                    u0: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|'
                }
            ],
            competitive: [
                {
                    d0: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    d5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',

                    u0: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    u5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|'
                }
            ]
        }
    })
]