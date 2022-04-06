import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iJukeState, iAlbum, iTrack } from '@app/interfaces';


const initialState: iJukeState = {
    selector: '',
    albums: [],
    hotSong: 0,
    position: 0,
    songLength: '',
    musicStyles: [],
    selectedStyles: [],
}

export const jukeSlice = createSlice({
    name: 'juke',
    initialState,
    reducers: {
        IMPORT_ALBUMS: (state: iJukeState, action: PayloadAction<Array<iAlbum>>) => {
            state.albums = action.payload;
        }
    }
});

export const { IMPORT_ALBUMS } = jukeSlice.actions;

export default jukeSlice.reducer