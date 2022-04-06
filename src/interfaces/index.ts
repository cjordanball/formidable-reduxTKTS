// Actions
export interface iGetAlbums {
    readonly type: 'IMPORT_ALBUMS';
    payload: Array<iAlbum>;
}

export interface iGetSongs {
    readonly type: 'IMPORT_ALL_SONGS';
    payload: Array<iTrack>;
}

export type AlbumActions = iGetAlbums | iGetSongs;

// Albums
export interface iAlbum {
    Artist: string;
    Composer?: string;
    Cover: string;
    DisplayName: string;
    Songs: Array<iAlbumSong>;
    Style: string | Array<string>;
    Title: string;
    TotalTracks: number;
    Year: number;
}

// Songs in album
export interface iAlbumSong {
    "Album Order": number;
    Length: string;
    Title: string;
    url: string;
}

// Songs away from album
export interface iTrack {
    title: string,
    url: string,
    artist: string;
    composer?: string;
    cover: string;
    totalTracks: number;
    year: number;
    displayName?: string;
    albumOrder: number;
    length: string;
}



export interface iJukeState {
    selector: string;
    albums: Array<iAlbum>;
    hotSong: number;
    position: number;
    songLength: string;
    musicStyles: Array<string>;
    selectedStyles: Array<string>;
}


