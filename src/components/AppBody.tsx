import React, { useEffect, Dispatch } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/appState/stores';
import { IMPORT_ALBUMS } from '@app/appState/slices/jukeSlice';
import { AlbumActions } from '@app/interfaces';
import { getAlbumList } from '@app/helperFunctions/fetchers';
import Styles from '@app/resources/styling';
import AlbumCard from '@comps/AlbumCard';

const AppBody: React.FC = () => {


    const jukeDispatch = useDispatch();
    const { albums } = useSelector((state: RootState) => state.juke);
    const count = useSelector((state: RootState) => state.counter.value);

    // useEffect(() => {
    //     console.log('inUseEffect');
    //     getAlbumList((albums) => jukeDispatch(IMPORT_ALBUMS(albums)));
    //     return () => { return }
    // }, [jukeDispatch]);

    return (
        <View style={Styles.Globals.RootStyle.bodyContainer}>
            <View>
                <FlatList
                    data={albums.payload}
                    keyExtractor={(album) => `${album.Title}-${(Math.floor(Math.random() * 1_000_000).toString(10))}`}
                    renderItem={({ item, index }) => {
                        return (
                            <AlbumCard item={item} index={index} />
                        )
                    }} 
                />
            </View>
            <View>
                <Text>AppBody</Text>
            </View>
        </View>
    );
};

export default AppBody;