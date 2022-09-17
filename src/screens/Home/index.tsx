import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <Image
                source={require ('../../assets/logo-nlw-esports.png')}
                style={styles.logo}
            />
        </View>
    )
}