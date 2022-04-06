import { iTrack } from "@app/interfaces";
import scrambleTracks from "./scrambleTracks"

const testSongs: Array<iTrack> = [
    {"Album Order": 1, "Artist": "The Academy of Ancient Music (Hogwood)", "Composer": "Mozart, Wolfgang Amadeus", "Cover": "https://raw-video-backup.s3.amazonaws.com/music/albumCovers/Mozart+Requiem.jpg", "DisplayName": "Mozart, Wolfgang Amadeus", "Length": "5:08", "Title": "Introitus: Requiem Aeternam", "TotalTracks": 13, "Year": 1984, "url": "https://raw-video-backup.s3.amazonaws.com/music/01+Mozart_+Requiem+In+D+Minor%2C+K+626+-+Introitus_+Requiem+Aeternam.mp3"},
    {"Album Order": 2, "Artist": "The Academy of Ancient Music (Hogwood)", "Composer": "Mozart, Wolfgang Amadeus", "Cover": "https://raw-video-backup.s3.amazonaws.com/music/albumCovers/Mozart+Requiem.jpg", "DisplayName": "Mozart, Wolfgang Amadeus", "Length": "2:30", "Title": "Kyrie Eleison", "TotalTracks": 13, "Year": 1984, "url": "https://raw-video-backup.s3.amazonaws.com/music/02+Mozart_+Requiem+In+D+Minor%2C+K+626+-+Kyrie+Eleison.mp3"},
    {"Album Order": 3, "Artist": "The Academy of Ancient Music (Hogwood)", "Composer": "Mozart, Wolfgang Amadeus", "Cover": "https://raw-video-backup.s3.amazonaws.com/music/albumCovers/Mozart+Requiem.jpg", "DisplayName": "Mozart, Wolfgang Amadeus", "Length": "1:52", "Title": "Dies Irae", "TotalTracks": 13, "Year": 1984, "url": "https://raw-video-backup.s3.amazonaws.com/music/03+Mozart_+Requiem+In+D+Minor%2C+K+626+-+Sequentia_+Dies+Irae.mp3"},
    {"Album Order": 4, "Artist": "The Academy of Ancient Music (Hogwood)", "Composer": "Mozart, Wolfgang Amadeus", "Cover": "https://raw-video-backup.s3.amazonaws.com/music/albumCovers/Mozart+Requiem.jpg", "DisplayName": "Mozart, Wolfgang Amadeus", "Length": "3:51", "Title": "Tuba Mirum", "TotalTracks": 13, "Year": 1984, "url": "https://raw-video-backup.s3.amazonaws.com/music/04+Mozart_+Requiem+In+D+Minor%2C+K+626+-+Sequentia_+Tuba+Mirum.mp3"}
]


describe('test of array scrambler', () => {
    it('returns an array of songs, all mixed up', () => {
        expect (scrambleTracks(testSongs).length).toBe(4);
    });
});