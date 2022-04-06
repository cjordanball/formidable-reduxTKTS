import React from 'react';
import { Text, Image, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { iAlbum } from '@app/interfaces';
import Styles from '@app/resources/styling';
import styles from '@app/resources/styling';

type albumCardProps = {
    item: iAlbum,
    index: number
};

const AlbumCard = ({ item, index }: albumCardProps ) => {
    const { height: screenHeight, width: screenWidth } = useWindowDimensions();
    return (
        <View style={Styles.AlbumCard.listItem}>
            <TouchableOpacity
                onPress={() => {console.log('Songs; ', item.Songs)
            }}>
                <View style={styles.AlbumCard.imageHolder}>
                    <Image
                        style={styles.AlbumCard.image}
                        source={{
                            uri: item.Cover,
                            cache: 'force-cache'
                        }}
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.AlbumCard.textSpace}>
                <View style={styles.AlbumCard.titleView}>
                    <Text style={[styles.AlbumCard.title, {width: screenWidth - 110}]}>{item.Title}</Text>
                </View>
                <View style={styles.AlbumCard.artistView}>
                    <Text style={[styles.AlbumCard.artist, {width: screenWidth - 110}]}>{item.Artist}</Text>
                </View>
            </View>
        </View>
    )
}

export default AlbumCard;