import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MEUSETUP from '../assets/drawable-mdpi/MEUSETUP.png';


const Header = () => {
    return(
    <View style = {styles.container}>
        <Image source = {MEUSETUP}></Image>
    </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 0,
        backgroundColor: '#27292B',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%'
    }
});

export default Header;