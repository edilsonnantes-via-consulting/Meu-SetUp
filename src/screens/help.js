import React from 'react';
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import Header from '../Components/header';
import Footer from '../Components/footer';
import LongText from '../Components/LongText';


export default function Help({navigation}){
    const text1 = require('../assets/data/textHelp.json')
    const text2 = require('../assets/data/comoUsar.json')
    
    return(
        <View style = {styles.container}>
        <StatusBar  backgroundColor = '#373A3C' barStyle = 'light-content'/>
      <View>
        <Header />
      </View>
      <ScrollView style = {styles.body}>
        
        <LongText label = {text1.label} content = {text1.content}/>
        <LongText label = {text2.label} content = {text2.content}/>
        

      </ScrollView>
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
    flexDirection: 'column',
    justifyContent:'space-between',
    top: 0,
    margin: 0
  },

  body:{
    marginHorizontal: 30,
    //alignItems: 'center',
    //justifyContent: 'center',
    height: '70%',
    top: 100,
    flex: 1
  },

  

  

});