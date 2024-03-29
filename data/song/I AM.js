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
            'competitive': 7
        },
        delay: -120,
        startFrom: 1400,

        cover: '../../data/images/album/I AM.png',
        background: '../../data/images/album/I AM.png',
        design: {
            chorus: [48.7,67],
            color : '#565656'
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
                d0: '|******|******|******|******|llllll|******|******|******|******|**s***|******|******|s**s**|******|******|******|',
                d1: '|******|******|s*****|******|******|******|******|******|******|******|**s***|******|******|******|s*****|****ll|',
                d2: '|******|s*****|******|******|******|******|llllll|******|******|******|s*****|******|******|**s***|****s*|******|',
                d3: '|s*****|******|******|******|******|llllll|******|******|******|****s*|******|******|******|****s*|******|llll**|',
                d4: '|******|******|******|s*****|******|******|******|llllll|******|******|****s*|******|******|******|**s***|******|',
                d5: '|******|******|******|******|******|******|******|******|s**s**|******|******|llllll|******|******|******|******|',

                u0: '|******|******|******|******|llllll|******|******|******|******|**s***|******|******|s**s**|******|******|******|',
                u1: '|******|******|s*****|******|******|******|******|******|******|******|**s***|******|******|******|s*****|****ll|',
                u2: '|******|s*****|******|******|******|******|llllll|******|******|******|s*****|******|******|**s***|****s*|******|',
                u3: '|s*****|******|******|******|******|llllll|******|******|******|****s*|******|******|******|****s*|******|llll**|',
                u4: '|******|******|******|s*****|******|******|******|llllll|******|******|****s*|******|******|******|**s***|******|',
                u5: '|******|******|******|******|******|******|******|******|s**s**|******|******|llllll|******|******|******|******|'
            },
            {   
                d0: '|******|***s**|******|******|****s*|******|******|******|******|******|******|llllll|******|******|******|******|',
                d1: '|******|******|******|llll**|******|******|****ll|ll****|******|******|****s*|******|s**s**|******|**s***|******|',
                d2: '|s**s**|******|**s***|******|s*****|******|******|**llll|******|****s*|******|******|******|****s*|******|llll**|',
                d3: '|******|******|s*****|******|******|******|llll**|******|******|******|s*****|******|******|**s***|****s*|******|',
                d4: '|******|******|****s*|******|**s***|******|******|******|s**s**|******|**s***|******|******|******|s*****|****ll|',
                d5: '|******|******|******|****s*|******|llllll|******|******|******|**s***|******|******|******|******|******|******|',

                u0: '|******|***s**|******|******|****s*|******|******|******|******|******|******|llllll|******|******|******|******|',
                u1: '|******|******|******|llll**|******|******|****ll|ll****|******|******|****s*|******|s**s**|******|**s***|******|',
                u2: '|s**s**|******|**s***|******|s*****|******|******|**llll|******|****s*|******|******|******|****s*|******|llll**|',
                u3: '|******|******|s*****|******|******|******|llll**|******|******|******|s*****|******|******|**s***|****s*|******|',
                u4: '|******|******|****s*|******|**s***|******|******|******|s**s**|******|**s***|******|******|******|s*****|****ll|',
                u5: '|******|******|******|****s*|******|llllll|******|******|******|**s***|******|******|******|******|******|******|'
            },
            {
                d0: '|******|******|******|******|******|******|llll**|******|******|******|llllll|ll****|******|******|******|******|',
                d1: '|******|**s*s*|******|******|******|******|******|******|llllll|ll****|******|******|llllll|llllll|******|******|',
                d2: '|******|******|******|llllll|******|******|llll**|******|******|**s***|******|**s***|******|******|******|******|',
                d3: '|s**s**|******|******|******|s*s*s*|******|****ll|ll****|llllll|ll****|******|****s*|******|******|******|******|',
                d4: '|******|******|s*s*s*|******|******|llllll|******|**llll|******|****s*|******|******|llllll|llllll|******|******|',
                d5: '|******|******|******|******|******|******|******|******|******|******|llllll|ll****|******|******|******|******|',

                u0: '|******|******|******|******|******|******|llll**|******|******|******|llllll|ll****|******|******|******|******|',
                u1: '|******|**s*s*|******|******|******|******|******|******|llllll|ll****|******|******|llllll|llllll|******|******|',
                u2: '|******|******|******|llllll|******|******|llll**|******|******|**s***|******|**s***|******|******|******|******|',
                u3: '|s**s**|******|******|******|s*s*s*|******|****ll|ll****|llllll|ll****|******|****s*|******|******|******|******|',
                u4: '|******|******|s*s*s*|******|******|llllll|******|**llll|******|****s*|******|******|llllll|llllll|******|******|',
                u5: '|******|******|******|******|******|******|******|******|******|******|llllll|ll****|******|******|******|******|'
            },
            {
                d0: '|******|**llll|******|******|llllll|******|******|******|******|******|llllll|ll****|******|******|******|******|',
                d1: '|****ll|ll****|llll**|**llll|******|******|******|**llll|******|****s*|******|******|llllll|llllll|******|******|',
                d2: '|llll**|******|****ll|ll****|******|******|****ll|ll****|llllll|ll****|******|****s*|******|******|******|******|',
                d3: '|llll**|******|****ll|ll****|******|******|llll**|******|******|**s***|******|**s***|******|******|******|******|',
                d4: '|****ll|ll****|llll**|**llll|******|******|******|******|llllll|ll****|******|******|llllll|llllll|******|******|',
                d5: '|******|**llll|******|******|llllll|******|llll**|******|******|******|llllll|ll****|******|******|******|******|',

                u0: '|******|**llll|******|******|llllll|******|******|******|******|******|llllll|ll****|******|******|******|******|',
                u1: '|****ll|ll****|llll**|**llll|******|******|******|**llll|******|****s*|******|******|llllll|llllll|******|******|',
                u2: '|llll**|******|****ll|ll****|******|******|****ll|ll****|llllll|ll****|******|****s*|******|******|******|******|',
                u3: '|llll**|******|****ll|ll****|******|******|llll**|******|******|**s***|******|**s***|******|******|******|******|',
                u4: '|****ll|ll****|llll**|**llll|******|******|******|******|llllll|ll****|******|******|llllll|llllll|******|******|',
                u5: '|******|**llll|******|******|llllll|******|llll**|******|******|******|llllll|ll****|******|******|******|******|'
            },
            {
                d0: '|******|******|****s*|******|******|******|******|******|******|s*****|******|******|******|s*****|******|******|',
                d1: '|s*****|******|******|******|llllll|llllll|******|******|******|******|******|******|s*****|s*****|s*****|******|',
                d2: '|******|**s***|******|******|******|******|******|******|s*****|s*****|******|****s*|******|******|******|s*****|',
                d3: '|******|******|s*****|******|******|******|******|******|s*****|s*****|******|s*****|******|******|******|****s*|',
                d4: '|****s*|******|******|******|llllll|llllll|******|******|******|******|****s*|******|s*****|s*****|s*****|******|',
                d5: '|******|******|******|**s***|******|******|******|******|******|s*****|s*****|******|******|s*****|******|******|',

                u0: '|******|******|****s*|******|******|******|******|******|******|s*****|******|******|******|s*****|******|******|',
                u1: '|s*****|******|******|******|llllll|llllll|******|******|******|******|******|******|s*****|s*****|s*****|******|',
                u2: '|******|**s***|******|******|******|******|******|******|s*****|s*****|******|****s*|******|******|******|s*****|',
                u3: '|******|******|s*****|******|******|******|******|******|s*****|s*****|******|s*****|******|******|******|****s*|',
                u4: '|****s*|******|******|******|llllll|llllll|******|******|******|******|****s*|******|s*****|s*****|s*****|******|',
                u5: '|******|******|******|**s***|******|******|******|******|******|s*****|s*****|******|******|s*****|******|******|'
            },
            {
                d0: '|s*****|******|******|****s*|******|******|llllll|******|s*****|******|******|******|******|llllll|******|******|',
                d1: '|s*****|s*****|******|s*****|******|llllll|******|******|******|******|s*****|******|llllll|******|******|******|',
                d2: '|******|s*****|s*****|******|llllll|******|******|s*****|s*****|******|******|s*****|******|******|llllll|******|',
                d3: '|******|s*****|s*****|******|llllll|******|******|****s*|******|s*****|******|****s*|******|******|llllll|******|',
                d4: '|s*****|s*****|****s*|******|******|******|llllll|******|******|******|****s*|******|llllll|******|******|******|',
                d5: '|s*****|******|******|******|******|llllll|******|******|******|s*****|******|******|******|llllll|******|******|',

                u0: '|s*****|******|******|****s*|******|******|llllll|******|s*****|******|******|******|******|llllll|******|******|',
                u1: '|s*****|s*****|******|s*****|******|llllll|******|******|******|******|s*****|******|llllll|******|******|******|',
                u2: '|******|s*****|s*****|******|llllll|******|******|s*****|s*****|******|******|s*****|******|******|llllll|******|',
                u3: '|******|s*****|s*****|******|llllll|******|******|****s*|******|s*****|******|****s*|******|******|llllll|******|',
                u4: '|s*****|s*****|****s*|******|******|******|llllll|******|******|******|****s*|******|llllll|******|******|******|',
                u5: '|s*****|******|******|******|******|llllll|******|******|******|s*****|******|******|******|llllll|******|******|'
            },
            {
                d0: '|llllll|******|******|llllll|******|******|s*****|******|******|s*****|s*****|******|llllll|******|******|******|',
                d1: '|******|llllll|******|******|llllll|******|******|s*****|******|******|****s*|******|******|******|llllll|******|',
                d2: '|******|******|llllll|******|******|******|s*****|******|s*****|s*****|******|s*****|******|llllll|******|s*****|',
                d3: '|******|llllll|******|******|******|******|s*****|******|s*****|s*****|******|****s*|******|llllll|******|****s*|',
                d4: '|llllll|******|llllll|******|llllll|******|******|s*****|******|******|******|******|******|******|llllll|******|',
                d5: '|******|******|******|llllll|******|******|s*****|******|s*****|******|******|******|llllll|******|******|******|',

                u0: '|llllll|******|******|llllll|******|******|s*****|******|******|s*****|s*****|******|llllll|******|******|******|',
                u1: '|******|llllll|******|******|llllll|******|******|s*****|******|******|****s*|******|******|******|llllll|******|',
                u2: '|******|******|llllll|******|******|******|s*****|******|s*****|s*****|******|s*****|******|llllll|******|s*****|',
                u3: '|******|llllll|******|******|******|******|s*****|******|s*****|s*****|******|****s*|******|llllll|******|****s*|',
                u4: '|llllll|******|llllll|******|llllll|******|******|s*****|******|******|******|******|******|******|llllll|******|',
                u5: '|******|******|******|llllll|******|******|s*****|******|s*****|******|******|******|llllll|******|******|******|'
            },
            {
                d0: '|llllll|******|******|******|llllll|******|******|******|******|******|******|s***s*|llllll|******|******|******|',
                d1: '|******|llllll|******|******|******|llllll|******|******|llllll|******|******|******|******|llllll|******|****s*|',
                d2: '|******|******|s***s*|******|******|******|llllll|****s*|******|llllll|******|******|******|******|llllll|******|',
                d3: '|******|llllll|******|******|llllll|******|******|s*****|******|******|s***s*|******|llllll|******|******|******|',
                d4: '|llllll|******|******|******|******|llllll|******|******|******|llllll|******|******|******|llllll|******|******|',
                d5: '|******|******|******|s***s*|******|******|llllll|******|llllll|******|******|******|******|******|llllll|******|',

                u0: '|llllll|******|******|******|llllll|******|******|******|******|******|******|s***s*|llllll|******|******|******|',
                u1: '|******|llllll|******|******|******|llllll|******|******|llllll|******|******|******|******|llllll|******|****s*|',
                u2: '|******|******|s***s*|******|******|******|llllll|****s*|******|llllll|******|******|******|******|llllll|******|',
                u3: '|******|llllll|******|******|llllll|******|******|s*****|******|******|s***s*|******|llllll|******|******|******|',
                u4: '|llllll|******|******|******|******|llllll|******|******|******|llllll|******|******|******|llllll|******|******|',
                u5: '|******|******|******|s***s*|******|******|llllll|******|llllll|******|******|******|******|******|llllll|******|'
            },
            {
                d0: '|llllll|******|llllll|******|******|******|***',
                d1: '|******|llllll|******|******|llllll|llllll|***',
                d2: '|******|******|******|llllll|******|******|***',
                d3: '|******|******|******|llllll|******|******|***',
                d4: '|******|llllll|******|******|llllll|llllll|***',
                d5: '|llllll|******|llllll|******|******|******|***',

                u0: '|llllll|******|llllll|******|******|******|***',
                u1: '|******|llllll|******|******|llllll|llllll|***',
                u2: '|******|******|******|llllll|******|******|***',
                u3: '|******|******|******|llllll|******|******|***',
                u4: '|******|llllll|******|******|llllll|llllll|***',
                u5: '|llllll|******|llllll|******|******|******|***'
            }
        ]
    }
}))