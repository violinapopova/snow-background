import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

import Snow from './Snow';
import BackgroundImage from '../../assets/images/FinlandBG.png';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        height,
    },
    bgImage: {
        width,
        height,
    },
});

export default function SnowScreen() {
    return (
        <View style={styles.container}>
            <Image source={BackgroundImage} style={styles.bgImage} />
            <Snow />
        </View>
    );
}