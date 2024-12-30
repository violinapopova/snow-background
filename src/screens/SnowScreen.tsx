import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

import Snow from '../components/snow/Snow';
import BackgroundImage from '../../assets/images/Winter.png';

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