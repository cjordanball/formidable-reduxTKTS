import React from 'react';
import { getDatabase, ref, onValue, child, get } from 'firebase/database';
import app from './firebase';
import { iGetAlbums, iGetSongs, iAlbum, iTrack, iAlbumSong } from '@app/interfaces';

export const getAlbumList = (jukeDispatchAlbums: React.Dispatch<iGetAlbums>): void => {
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, 'ALBUMS')).then((snap) => {
        if (snap.exists()) {
            const fetchedAlbums = snap.val().map((album: iAlbum) => {
                return {
                    Artist: album.Artist,
                    Composer: album.Composer || 'NA',
                    Cover: album.Cover,
                    DisplayName: album.DisplayName || 'NA',
                    Songs: album.Songs,
                    Style: album.Style,
                    Title: album.Title,
                    TotalTracks: album.TotalTracks,
                    Year: album.Year
                };
            });
            jukeDispatchAlbums({
                type: 'IMPORT_ALBUMS',
                payload: fetchedAlbums
            });
        } else {
            console.log('No Data');
        }
    }).catch((err) => {
        console.log('ERR: ', err);
    });
}

// export const getAllSongs = () : Array<iTrack> => {
//     const dbRef = ref(getDatabase(app));
//     get(child(dbRef, 'ALBUMS')).then((snap) => {
//         if (snap.exists()) {
//             const fetchedSongs: Array<iTrack> = [];
//             snap.val().forEach((album: iAlbum) => {
//                 album.Songs.forEach((song: iAlbumSong) => {
//                     fetchedSongs.push({
//                         ...song,
//                         Artist: album.Artist,
//                         Composer: album.Composer ?? 'N/A',
//                         Cover: album.Cover,
//                         TotalTracks: album.TotalTracks,
//                         Year: album.Year,
//                         DisplayName: album.DisplayName ?? 'N/A'
//                     }); 
//                 });
//             });
//             return 
//             });
//         } else {
//             console.log('No Song Data');
//         }
//     }).catch((err) => {
//         console.log('ERR: ', err);
//     });
// }