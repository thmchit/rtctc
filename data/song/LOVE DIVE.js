/// <reference path="../../node_modules/rhy-game/dist/rhy-game.d.ts"/>

mapList.push(new Song({
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

        cover: '../../data/images/album/LOVE DIVE.png',
        design: {
            chorus: [41,58],
            color : '#003464'
        }
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

                u0: '|****|s***|****|****|****|****|s***|****|****|****|****|llll|****|****|****|****|',
                u1: '|****|****|s***|llll|****|****|****|****|****|****|s***|****|****|****|****|llll|',
                u2: '|****|****|**s*|****|****|****|****|llll|****|****|****|****|****|s*s*|****|****|',
                u3: '|****|****|****|****|s*s*|****|****|****|****|s***|****|****|****|****|s*s*|****|',
                u4: '|****|**s*|****|llll|****|****|**s*|****|****|**s*|****|****|s*s*|****|****|****|',
                u5: '|****|****|****|****|****|s*s*|****|llll|****|****|**s*|llll|****|****|****|****|'
            },
            {
                d0: '|****|llll|****|****|****|****|****|****|****|****|llll|****|****|****|****|****|',
                d1: '|****|****|llll|****|****|****|****|****|****|****|****|llll|****|****|****|****|',
                d2: '|****|****|****|llll|****|****|****|****|****|llll|****|****|llll|llll|****|****|',
                d3: '|****|llll|****|****|llll|llll|****|****|****|****|llll|****|****|****|****|****|',
                d4: '|****|****|****|llll|****|****|****|****|****|****|****|llll|****|****|****|****|',
                d5: '|****|****|llll|****|****|****|****|****|****|llll|****|****|****|****|****|****|',

                u0: '|****|llll|****|****|****|****|****|****|****|****|llll|****|****|****|****|****|',
                u1: '|****|****|llll|****|****|****|****|****|****|****|****|llll|****|****|****|****|',
                u2: '|****|****|****|llll|****|****|****|****|****|llll|****|****|llll|llll|****|****|',
                u3: '|****|llll|****|****|llll|llll|****|****|****|****|llll|****|****|****|****|****|',
                u4: '|****|****|****|llll|****|****|****|****|****|****|****|llll|****|****|****|****|',
                u5: '|****|****|llll|****|****|****|****|****|****|llll|****|****|****|****|****|****|'
            },
            {
                d0: '|****|****|****|****|****|****|****|****|****|****|llll|****|****|****|****|****|',
                d1: '|****|****|****|****|****|**ll|llll|****|llll|****|****|****|s***|****|****|****|',
                d2: '|****|****|llll|****|****|****|****|s*s*|****|****|****|**s*|**s*|**s*|****|**s*|',
                d3: '|****|****|****|****|llll|ll**|****|s*s*|****|**s*|****|****|****|s***|s***|s***|',
                d4: '|****|llll|****|****|****|****|****|****|llll|****|****|****|****|****|**s*|****|',
                d5: '|****|****|****|llll|****|****|****|****|****|****|llll|****|****|****|****|****|',

                u0: '|****|****|****|****|****|****|****|****|****|****|llll|****|****|****|****|****|',
                u1: '|****|****|****|****|****|**ll|llll|****|llll|****|****|****|s***|****|****|****|',
                u2: '|****|****|llll|****|****|****|****|s*s*|****|****|****|**s*|**s*|**s*|****|**s*|',
                u3: '|****|****|****|****|llll|ll**|****|s*s*|****|**s*|****|****|****|s***|s***|s***|',
                u4: '|****|llll|****|****|****|****|****|****|llll|****|****|****|****|****|**s*|****|',
                u5: '|****|****|****|llll|****|****|****|****|****|****|llll|****|****|****|****|****|'
            },
            {
                d0: '|s*ll|ll**|****|****|**ll|ll**|**s*|****|****|****|****|****|****|****|****|****|',
                d1: '|****|**ll|ll**|****|s***|****|****|**s*|****|****|****|****|****|****|****|****|',
                d2: '|****|****|****|**s*|****|**ll|ll**|****|****|**s*|****|****|****|****|****|**s*|',
                d3: '|****|****|**ll|ll**|****|****|****|****|****|****|**s*|**s*|****|****|****|s***|',
                d4: '|s***|****|****|****|s***|****|****|****|s*s*|****|****|****|****|****|**s*|****|',
                d5: '|**ll|ll**|****|****|****|****|**s*|****|****|****|****|****|****|****|s***|****|',

                u0: '|s*ll|ll**|****|****|**ll|ll**|**s*|****|****|****|****|****|****|****|****|****|',
                u1: '|****|**ll|ll**|****|s***|****|****|**s*|****|****|****|****|****|****|****|****|',
                u2: '|****|****|****|**s*|****|**ll|ll**|****|****|**s*|****|****|****|****|****|**s*|',
                u3: '|****|****|**ll|ll**|****|****|****|****|****|****|**s*|**s*|****|****|****|s***|',
                u4: '|s***|****|****|****|s***|****|****|****|s*s*|****|****|****|****|****|**s*|****|',
                u5: '|**ll|ll**|****|****|****|****|**s*|****|****|****|****|****|****|****|s***|****|'
            },
            {
                d0: '|s*ll|ll**|****|****|**ll|ll**|**s*|****|****|****|****|****|s*ll|ll**|****|****|',
                d1: '|****|****|****|**s*|s***|****|****|****|****|****|****|****|****|**s*|****|****|',
                d2: '|**ll|ll**|****|****|****|****|****|****|****|****|****|****|****|****|llll|****|',
                d3: '|s***|**ll|ll**|****|****|**ll|ll**|****|****|****|****|****|****|****|****|llll|',
                d4: '|****|****|**ll|ll**|s***|****|****|****|****|****|****|****|****|**s*|****|****|',
                d5: '|****|****|****|****|****|****|**s*|****|****|****|****|****|s*ll|ll**|****|****|',

                u0: '|s*ll|ll**|****|****|**ll|ll**|**s*|****|****|****|****|****|s*ll|ll**|****|****|',
                u1: '|****|****|****|**s*|s***|****|****|****|****|****|****|****|****|**s*|****|****|',
                u2: '|**ll|ll**|****|****|****|****|****|****|****|****|****|****|****|****|llll|****|',
                u3: '|s***|**ll|ll**|****|****|**ll|ll**|****|****|****|****|****|****|****|****|llll|',
                u4: '|****|****|**ll|ll**|s***|****|****|****|****|****|****|****|****|**s*|****|****|',
                u5: '|****|****|****|****|****|****|**s*|****|****|****|****|****|s*ll|ll**|****|****|'
            },
            {
                d0: '|****|****|****|llll|****|****|****|****|****|****|llll|****|****|****|****|s***|',
                d1: '|****|****|llll|****|llll|ll**|s***|s***|****|llll|****|****|llll|ll**|s***|****|',
                d2: '|****|llll|****|****|****|****|****|***s|****|****|****|llll|****|**s*|****|**s*|',
                d3: '|****|****|****|llll|****|**s*|**s*|**s*|****|llll|****|****|****|****|**s*|****|',
                d4: '|****|llll|****|****|llll|ll**|s***|s***|****|****|llll|****|****|****|s***|****|',
                d5: '|****|****|llll|****|****|****|****|****|****|****|****|llll|****|****|****|s***|',

                u0: '|****|****|****|llll|****|****|****|****|****|****|llll|****|****|****|****|s***|',
                u1: '|****|****|llll|****|llll|ll**|s***|s***|****|llll|****|****|llll|ll**|s***|****|',
                u2: '|****|llll|****|****|****|****|****|***s|****|****|****|llll|****|**s*|****|**s*|',
                u3: '|****|****|****|llll|****|**s*|**s*|**s*|****|llll|****|****|****|****|**s*|****|',
                u4: '|****|llll|****|****|llll|ll**|s***|s***|****|****|llll|****|****|****|s***|****|',
                u5: '|****|****|llll|****|****|****|****|****|****|****|****|llll|****|****|****|s***|'
            },
            {
                d0: '|****|llll|****|llll|****|****|****|****|****|****|****|****|****|****|****|****|',
                d1: '|****|****|llll|****|ll**|**s*|****|****|****|****|****|****|**ll|ll**|****|****|',
                d2: '|****|****|****|****|**s*|s***|s***|****|****|****|llll|****|****|****|llll|****|',
                d3: '|llll|****|****|****|****|**s*|**s*|****|****|**s*|****|****|****|**s*|****|llll|',
                d4: '|****|****|****|****|**s*|s***|s***|****|****|****|****|****|s***|****|****|****|',
                d5: '|****|****|****|****|****|****|**s*|llll|****|****|****|****|****|****|****|****|',

                u0: '|****|llll|****|llll|****|****|****|****|****|****|****|****|****|****|****|****|',
                u1: '|****|****|llll|****|ll**|**s*|****|****|****|****|****|****|**ll|ll**|****|****|',
                u2: '|****|****|****|****|**s*|s***|s***|****|****|****|llll|****|****|****|llll|****|',
                u3: '|llll|****|****|****|****|**s*|**s*|****|****|**s*|****|****|****|**s*|****|llll|',
                u4: '|****|****|****|****|**s*|s***|s***|****|****|****|****|****|s***|****|****|****|',
                u5: '|****|****|****|****|****|****|**s*|llll|****|****|****|****|****|****|****|****|'
            }
        ]
    }
}))