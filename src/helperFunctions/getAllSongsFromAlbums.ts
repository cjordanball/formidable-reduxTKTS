import { iAlbum, iTrack, iAlbumSong } from '@app/interfaces';

const getAllSongsFromAlbums = (albumArray: Array<iAlbum>): Array<iTrack> => {
    const songList: Array<iTrack> = [];
    albumArray.forEach((album: iAlbum) => {
        album.Songs.forEach((song: iAlbumSong) => {
            songList.push({
                title: song.Title,
                url: song.url,
                artist: album.Artist,
                composer: album.Composer ?? 'N/A',
                cover: album.Cover,
                totalTracks: album.TotalTracks,
                year: album.Year,
                displayName: album.DisplayName ?? 'N/A',
                albumOrder: song['Album Order'],
                length: song.Length
            });
        });
    });
    return songList;
};

export default getAllSongsFromAlbums;