import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, TextInput, Image, ImagePropTypes } from 'react-native';
import Header from '../Components/header';
import Footer from '../Components/footer';
import renderGPU from '../Components/renderGPU';


export default function placaVideo({navigation}) {
  

  
  return (
    
    <View style = {styles.container}>
        <StatusBar  backgroundColor = '#373A3C' barStyle = 'light-content'/>
      <View>
        <Header />
      </View>
      <View style = {styles.body}>
        {renderGPU({navigation})}
      </View>
      <View>
        {Footer({navigation})}
      </View>
  
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373A3C',
    color: '#fff',
    flexDirection: 'column',
    justifyContent:'space-between'
  },
  
  body:{
    top: 5,
    margin: 10,
    height: '70%'
  },

});
