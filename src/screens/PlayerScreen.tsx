import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/appState/stores';
import { iTrack } from '@app/interfaces';
import scrambleTracks from '@app/helperFunctions/scrambleTracks';
import TrackPlayer, { Event, Capability } from 'react-native-track-player';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';


const PlayerScreen = ({ route }) => {
    const tracks = route.params.songs

    const [currentTrack, setCurrentTrack] = useState<iTrack>();

    const [currentTitle, setCurrentTitle] = useState<string>();
    const [currentArtist, setCurrentArtist] = useState<string>();

    const setUpTrackPlayer = async () => {
        try {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.add(tracks.slice(0, 2));
            console.log('Tracks added!', tracks.slice(0, 4));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        TrackPlayer.updateOptions({
            // keeps playing even if app is closed
            stopWithApp: false,
            capabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.Stop
            ],
            compactCapabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.Stop
            ]
        });
        setUpTrackPlayer();
        return () => TrackPlayer.destroy();
    }, []);

    useEffect(() => {
        console.log('inUseEffect!!!');
        TrackPlayer.play();
        // return () => TrackPlayer.destroy();
    }, [currentTitle]);

    useEffect(() => {
        console.log('EL');
        const myEL = TrackPlayer.addEventListener(Event.PlaybackTrackChanged, (e) => {
            console.log('CHanged');
            setCurrentTitle(tracks[e?.nextTrack || 0]?.title || 'Unidentified');
            setCurrentArtist(tracks[e?.nextTrack || 0]?.artist || 'Unidentified');
        });
        const ended = TrackPlayer.addEventListener(Event.PlaybackQueueEnded, (e) => {
            console.log('ENDED')
            setCurrentTitle('');
            setCurrentArtist('');
            TrackPlayer.stop();
        })
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>{currentTitle}</Text>
                <Text style={styles.text}>{currentArtist}</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.pause()}>
                    <Text style={styles.text}>Pause</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.play()}>
                    <Text style={styles.text}>Play</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.skipToPrevious()}>
                    <Text style={styles.text}>Prev</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.skipToNext()}>
                    <Text style={styles.text}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20
    },
    btn: {
        backgroundColor: '#ff0044',
        padding: 15,
        borderRadius: 5,
        margin: 10,
        width: 160
    },
    text: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center'
    }
})

export default PlayerScreen;