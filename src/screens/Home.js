import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, StatusBar, Image, FlatList } from 'react-native';
import Header from '../Components/header';
import Footer from '../Components/footer';
import add from '../assets/drawable-mdpi/add.png';
import Configs from '../Components/renderConfis'
import { useDispatch } from 'react-redux';
import { doReset, resetID } from '../actions';
//import firestore from '@react-native-firebase/firestore';





export default function Home({navigation}) {
  
  const dispatch = useDispatch();
  
  
  return (
    
    <View style = {styles.container}>
        <StatusBar  backgroundColor = '#373A3C' barStyle = 'light-content'/>
      <View>
        <Header />
      </View>
      <View style = {styles.body}>
        <TouchableOpacity style = {styles.add} onPress = {() => {
          resetID(dispatch)
          doReset(dispatch)
          navigation.navigate('config')
          }}>
          <Image source = {add} /><Text style = {styles.text}>Adicionar nova configuração</Text>
        </TouchableOpacity>
        {Configs(dispatch, {navigation})}
        
        

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

  text:{
    color: '#fff',
    fontSize: 15,
    paddingLeft: 10

  },

  add:{
    backgroundColor:'transparent',
    borderRadius: 20,
    width: '100%',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    marginBottom: 5
  },
  titleLista:{
    paddingHorizontal: 50,
    color: '#fff',
    fontSize: 20
  },
  
  btnLista:{
    backgroundColor:'transparent',
    borderRadius: 20,
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    height: 70,
    flexDirection: 'column',
    marginBottom: 5
  },

  textLista:{
    color: '#fff',
    fontSize: 11,
    marginLeft: 10,
    marginRight: 10
  }
});
