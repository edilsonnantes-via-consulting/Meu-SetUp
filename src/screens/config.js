import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, StatusBar, Alert, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import Header from '../Components/header';
import Footer from '../Components/footer';
import { useDispatch, useSelector } from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import { doReset, resetID, salvarConfig, updateConfig } from '../actions';
//import firebase from 'firebase';
//import firebase from '@react-native-firebase/app';
//import firestore from '@react-native-firebase/firestore';



export default function config({navigation}) {
   
  const Config = useSelector(state => state.config);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [nome, setNome] = useState(''); 
  const ID = useSelector(state => state.index);
  
  

  
  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
       
        const action = e.data.action;

        e.preventDefault();

        Alert.alert(
          'Descartar alterações?',
          'Você possui alterações não salvas. Gostaria de descartá-las e sair?',
          [
            { text: "Continuar editando", style: 'cancel', onPress: () => {} },
            {
              text: 'Descartar',
              style: 'destructive',
              onPress: () => {
                resetID(dispatch)
                doReset(dispatch)
                navigation.push('home')
              },
            },
          ]
        );
      }),
      []
  );

  return (
    
    <View style = {styles.container}>
      
      
        <StatusBar  backgroundColor = '#373A3C' barStyle = 'light-content'/>
      
      <View>
        <Header />
      </View>
     
      <KeyboardAvoidingView style = {styles.body} behavior = 'padding'>
     
      <TouchableOpacity style = {styles.btnConfig} onPress = {() => navigation.navigate('cpu')}>
        <Text style = {styles.text}>{Config.CPU.CPU}</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.btnConfig} onPress = {() => navigation.navigate('mb')}>
          <Text style = {styles.text}>{Config.MB.MB}</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.btnConfig} onPress = {() => navigation.navigate('ram')}>
          <Text style = {styles.text}>{Config.RAM.RAM}</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.btnConfig} onPress = {() => navigation.navigate('video')}>
          <Text style = {styles.text}>{Config.GPU.GPU}</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.btnConfig} onPress = {() => navigation.navigate('fonte')}>
          <Text style = {styles.text}>{Config.PWR.PWR}</Text>
      </TouchableOpacity>
        <TextInput style = {styles.input}
              placeholder = "Nome da configuração"
              autoCorrect = {false}
              value = {nome}
              onChangeText = {valor => {
                setNome(valor)
              }}
              
            />
        <TouchableOpacity style = {styles.btnSave} onPress = {() => {
          if(ID == null){
            salvarConfig(nome, Config, user, navigation)
          }else{
            updateConfig(nome, Config, user, ID, navigation)
          }
        }}>
          <Text style = {styles.text}>Salvar</Text>
        </TouchableOpacity>
       
      </KeyboardAvoidingView>
      
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
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: '70%',
    top: 1,
    flex: 1
  },

  text:{
    color: '#fff'
  },
  btnConfig:{
    backgroundColor:'transparent',
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    height: 65,
    flexDirection: 'column',
    marginBottom: 5
  },
  viewSave:{
    width: '60%',
    alignItems: "center"
    
  },
  input:{
    backgroundColor: 'transparent',
    borderRadius: 40,
    borderColor: '#fff',
    borderWidth: 1,
    color: '#fff',
    width: '60%',
    textAlign: 'center',
    fontSize: 15,
    padding: 10,
    marginBottom: 5
  },
  btnSave:{
    backgroundColor:'transparent',
    borderRadius: 20,
    width: '60%',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    flexDirection: 'column',
    marginBottom: 5
  },

});
