/// <reference path="../node_modules/rhy-game/dist/rhy-game.js"/>
const mapList = [
    new Song({
        info: {
            title: 'LOVE DIVE',
            artist: 'IVE',
            music: '../../data/music/LOVE DIVE.mp3',
            bpm: 118,
            split: 16,
            difficulty: 3
        },
        charts: {
            competitive: [
                {
                    laneDown0: '|s***|****|****|****|s***|****|****|****|s***|****|****|****|s***|****|****|****|',
                    laneDown1: '|****|****|****|****|****|****|**s*|****|****|****|**s*|****|****|****|****|****|',
                    laneDown2: '|****|****|**s*|****|****|****|****|****|****|****|****|****|****|****|**s*|****|',
                    laneDown3: '|****|****|****|s***|****|****|****|****|****|****|****|****|****|****|****|s***|',
                    laneDown4: '|****|****|****|****|****|****|****|s***|****|****|****|s***|****|****|****|****|',
                    laneDown5: '|****|s***|****|****|****|s***|****|****|****|s***|****|****|****|s***|****|****|'
                },
                {
                    laneDown0: '|**s*|****|****|****|s***|****|****|****|**s*|s*s*|s*s*|s***|s*s*|s*s*|s*s*|s*s*|',
                    laneDown1: '|****|****|**s*|****|****|****|s***|****|**s*|s*s*|s*s*|s***|s*s*|s*s*|s*s*|s*s*|',
                    laneDown2: '|****|**s*|****|****|****|s***|****|s***|**s*|s*s*|s*s*|s***|s*s*|s*s*|s*s*|s*s*|',
                    laneDown3: '|****|****|s***|****|****|**s*|****|**s*|**s*|s*s*|s*s*|s***|s*s*|s*s*|s*s*|s*s*|',
                    laneDown4: '|****|s***|****|****|****|****|**s*|****|**s*|s*s*|s*s*|s***|s*s*|s*s*|s*s*|s*s*|',
                    laneDown5: '|****|****|****|s***|**s*|****|****|****|**s*|s*s*|s*s*|s***|s*s*|s*s*|s*s*|s*s*|'
                },
                {
                    laneDown0: '|****|s*s*|s*s*|llll|s*s*|s*s*|s*s*|llll|****|s*s*|s*s*|llll|s*s*|s*s*|s*s*|llll|',
                    laneDown1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    laneDown2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    laneDown3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    laneDown4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    laneDown5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|'
                },
                {
                    laneDown0: '|****|lll*|lll*|lll*|llll|lll*|llll|s*s*|lll*|lll*|lll*|lll*|llll|lll*|llll|s*s*|',
                    laneDown1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    laneDown2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    laneDown3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    laneDown4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    laneDown5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|'
                },
                {
                    laneDown0: '|lll*|lll*|lll*|lll*|llll|l*ll|llll|s*s*|llll|**s*|llll|**s*|s*s*|s*s*|s*s*|s*s*|',
                    laneDown1: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    laneDown2: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    laneDown3: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    laneDown4: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|',
                    laneDown5: '|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|****|'
                }
            ]
        }
    })
]