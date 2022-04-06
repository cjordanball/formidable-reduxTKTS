import React, { Dispatch, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/appState/stores';
import { IMPORT_ALBUMS } from '@app/appState/slices/jukeSlice';
import Styles from '@app/resources/styling';
import { PlayAction } from '@app/enums';
import { getAlbumList } from '@app/helperFunctions/fetchers';
import { getAllSongsFromAlbums } from '@app/helperFunctions';
import { iGetAlbums } from '@app/interfaces';
import scrambleTracks from '@app/helperFunctions/scrambleTracks';

const AboutScreen = ({ navigation }) => {

    const jukeDispatch = useDispatch();
    const albumList = useSelector((state: RootState) => state.juke.albums?.payload);

    useEffect(() => {
        getAlbumList((albums) => jukeDispatch(IMPORT_ALBUMS(albums)));
        return () => { return }
    }, [jukeDispatch]);


    return (
        <View style={Styles.AboutScreen.container}>
            <View style={Styles.AboutScreen.subContainer}>
                <View>
                    <Text style={Styles.AboutScreen.headline}>
                        Jordan's Jumpin Jive Jukebox!
                    </Text>
                </View>
            </View>
            <View style={Styles.AboutScreen.subContainer}>
                <Text style={Styles.AboutScreen.headline}>
                    Just play the damn songs!
                </Text>
                <TouchableOpacity
                    style={Styles.AboutScreen.buttonStyle}
                    onPress={() => {
                        const mixedTracks = scrambleTracks(getAllSongsFromAlbums(albumList)) 
                        navigation.navigate('Player', { songs: mixedTracks});
                    }}>
                    <Text style={Styles.AboutScreen.buttonStyle.textStyle}>Play</Text>
                </TouchableOpacity>
                    
            </View>
        </View>
    );
};

export default AboutScreen;
