import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@app/appState/slices/counterSlice';
import jukeReducer from '@app/appState/slices/jukeSlice';

export const formidableStore = configureStore({
    reducer: {
        counter: counterReducer,
        juke: jukeReducer
    },
});