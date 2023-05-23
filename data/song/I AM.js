/// <reference path="../../node_modules/rhy-game/dist/rhy-game.d.ts"/>

mapList.push(new Song({
    info: {
        title: 'I AM',
        artist: 'IVE',
        music: '../../data/music/I AM.mp3',

        bpm: 122,
        split: 24,
        difficulty: {
            'cooperative': 3,
            'competitive': 3
        },
        delay: -120,
        startFrom: 1400,

        cover: '../../data/images/album/I AM.png',
        background: '../../data/images/album/I AM.png',
        design: {
            chorus: [48.7,67],
            color : '#EFEFEF'
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
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
                d0: '|******|******|******|******|llllll|******|******|******|******|**s***|******|******|s*s***|******|******|******|',
                d1: '|******|******|s*****|******|******|******|******|******|******|******|**s***|******|******|******|s*****|***lll|',
                d2: '|******|s*****|******|******|******|******|llllll|******|******|******|s*****|******|******|**s***|****s*|******|',
                d3: '|s*****|******|******|******|******|llllll|******|******|******|****s*|******|******|******|****s*|******|******|',
                d4: '|******|******|******|s*****|******|******|******|llllll|******|******|****s*|******|******|******|**s***|******|',
                d5: '|******|******|******|******|******|******|******|******|s**s**|******|******|llllll|******|******|******|lll***|',

                u0: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u1: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u2: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u3: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u4: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u5: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|'
            },
            {   
                d0: '|******|***s**|******|******|****s*|******|******|******|******|**s*s*|s*s*s*|llllll|s**s**|**s*s*|s*s*s*|lll***|',
                d1: '|******|******|******|lll***|******|******|***lll|lll***|******|******|******|******|******|******|******|***lll|',
                d2: '|s**s**|******|**s***|******|s*****|******|******|***s**|******|******|******|******|******|******|******|******|',
                d3: '|******|******|s*****|******|******|******|s*****|******|******|******|******|******|******|******|******|******|',
                d4: '|******|******|****s*|******|**s***|******|******|******|s**s**|******|******|******|******|******|******|******|',
                d5: '|******|******|******|***s**|******|llllll|******|******|******|******|******|******|******|******|******|******|',

                u0: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u1: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u2: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u3: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u4: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u5: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|'
            },
            {
                d0: '|s**s**|**s*s*|s*s*s*|llllll|s*s*s*|llllll|****ll|ll****|llllll|lls*s*|llllll|lls*s*|llllll|llllll|******|******|',
                d1: '|******|******|******|******|******|******|llll**|**llll|******|******|******|******|******|******|******|******|',
                d2: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d3: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d4: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d5: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',

                u0: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u1: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u2: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u3: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u4: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u5: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|'
            },
            {
                d0: '|llll**|**llll|****ll|ll****|llllll|******|llll**|**llll|******|******|******|******|******|******|******|******|',
                d1: '|****ll|ll****|llll**|**llll|******|******|****ll|ll****|llllll|lls*s*|llllll|lls*s*|llllll|llllll|******|******|',
                d2: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d3: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d4: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d5: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',

                u0: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u1: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u2: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u3: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u4: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u5: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|'
            },
            {
                d0: '|s*****|**s***|****s*|******|llllll|llllll|******|******|s*****|s*****|s**s**|s**s**|s*****|s*****|s*****|s**s**|',
                d1: '|****s*|******|s*****|**s***|******|******|******|******|******|******|******|******|******|******|******|******|',
                d2: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d3: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d4: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d5: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',

                u0: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u1: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u2: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u3: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u4: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u5: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|'
            },
            {
                d0: '|s*****|s*****|s**s**|s**s**|llllll|******|llllll|s**s**|s*****|s*****|s**s**|s**s**|llllll|******|llllll|llllll|',
                d1: '|******|******|******|******|******|llllll|******|******|******|******|******|******|******|llllll|******|******|',
                d2: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d3: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d4: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d5: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',

                u0: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u1: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u2: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u3: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u4: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u5: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|'
            },
            {
                d0: '|******|llllll|******|llllll|******|******|s*****|s*****|s*****|s*****|s**s**|s**s**|llllll|******|llllll|s**s**|',
                d1: '|llllll|******|llllll|******|llllll|llllll|******|******|******|******|******|******|******|llllll|******|******|',
                d2: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d3: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d4: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d5: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',

                u0: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u1: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u2: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u3: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u4: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u5: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|'
            },
            {
                d0: '|llllll|******|s**s**|s**s**|llllll|******|llllll|s**s**|llllll|******|s**s**|s**s**|llllll|******|llllll|llls**|',
                d1: '|******|llllll|******|******|******|llllll|******|******|******|llllll|******|******|******|llllll|******|******|',
                d2: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d3: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d4: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                d5: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',

                u0: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u1: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u2: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u3: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u4: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|',
                u5: '|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|******|'
            },
            {
                d0: '|llllll|******|llllll|******|llllll|llllll|***',
                d1: '|******|llllll|******|llllll|******|******|***',
                d2: '|******|******|******|******|******|******|***',
                d3: '|******|******|******|******|******|******|***',
                d4: '|******|******|******|******|******|******|***',
                d5: '|******|******|******|******|******|******|***',

                u0: '|******|******|******|******|******|******|***',
                u1: '|******|******|******|******|******|******|***',
                u2: '|******|******|******|******|******|******|***',
                u3: '|******|******|******|******|******|******|***',
                u4: '|******|******|******|******|******|******|***',
                u5: '|******|******|******|******|******|******|***'
            }
        ]
    }
}))