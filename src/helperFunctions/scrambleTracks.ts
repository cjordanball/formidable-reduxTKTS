import { iTrack } from "@app/interfaces";

const scrambleTracks = (inputTracksArray: Array<iTrack>): Array<iTrack> => {
    const arrHolder = Array.from(inputTracksArray);
    const returnArray: Array<iTrack> = [];
    let arrLength = arrHolder.length;
    while(arrHolder.length > 0) {
        let target = Math.floor(Math.random() * arrLength);
        returnArray.push(...arrHolder.splice(target, 1));
    }
    return returnArray;
}

export default scrambleTracks;