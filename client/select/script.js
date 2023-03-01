import { mapList } from '../../data/mapList.js'

let index = 0
function viewMusic() {
    changeAlbumCover()
    changeDescription()

    function getIndex(index) {
        if (!(0 <= index && index < mapList.length)) return mapList.length % index
        return index
    }

    function changeAlbumCover() {
        const albums = document.getElementsByClassName('album')
        albums[0].style.backgroundImage
        = `url("../../data/images/album/${mapList[getIndex(index)].name}.png")`
        albums[1].style.backgroundImage
        = `url("../../data/images/album/${mapList[getIndex(index - 1)].name}.png")`
        albums[2].style.backgroundImage
        = `url("../../data/images/album/${mapList[getIndex(index + 1)].name}.png")`
    }

    function changeDescription() {
        for (let description of document.getElementsByClassName('description')) {
            description.textContent = `${mapList[getIndex(index)].name}`
        }
    }
}

window.onload = viewMusic(index)