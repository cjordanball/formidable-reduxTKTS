import React from 'react';
import { SafeAreaView, Text, View, useWindowDimensions } from 'react-native';
import Header from '@comps/Header';
import AppBody from '@comps/AppBody';
import Styles from '@app/resources/styling';

const AlbumListScreen = () => {
    const { height: screenHeight, width: screenWidth } = useWindowDimensions();

    return screenHeight > screenWidth ? (
        <SafeAreaView style={Styles.Globals.RootStyle.safeContainer}>
            <View style={Styles.Globals.RootStyle.globalContainer}>
                <Header />
                <AppBody />
            </View>
        </SafeAreaView>
    ) : (
        <View style={Styles.Globals.RootStyle.globalContainer}>
            <Text>Album List Screen</Text>
        </View>
    );
};

export default AlbumListScreen;