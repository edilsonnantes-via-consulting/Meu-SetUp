import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from '../Components/header';
import Footer from '../Components/footer';
import renderCPU from '../Components/renderCPU'




export default function processadores({navigation,cpu}) {
  

  
  return (
    
    <View style = {styles.container}>
        <StatusBar  backgroundColor = '#373A3C' barStyle = 'light-content'/>
      <View>
        <Header />
      </View>
      <View style = {styles.body}>
        {renderCPU({navigation,cpu})}
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
    justifyContent: 'space-between'
  },
  
  body:{
    top: 5,
    margin: 10,
    height: '70%'
  },

  
});
