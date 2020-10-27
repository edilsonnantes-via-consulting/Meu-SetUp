import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import question from '../assets/drawable-mdpi/question.png';



function Footer({navigation}){
    return(
    <View style = {styles.container}>
        <TouchableOpacity style = {styles.duvidas} onPress = {() => {navigation.navigate('help')}}>
            <Image source = {question} />
            <Text style = {styles.text}>Dúvidas</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor: '#27292B',
        position: 'absolute',
        justifyContent: 'center',
        height: 90,
        width: '100%',
        bottom: 0,
        alignItems: 'baseline',
         
    },
    text:{
        color: '#fff'
    },
    duvidas:{
        alignItems: 'center',
        justifyContent: 'center',
        left: 30
    }
});

export default Footer;