import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, StatusBar, TextInput, Image, Alert, ActivityIndicator } from 'react-native';
import Header from '../Components/header';
import arrow from '../assets/drawable-mdpi/arrow.png';
import FormRow from '../Components/FormRow';
import { useDispatch, useSelector } from 'react-redux';
import {fazerLogin} from '../actions';
import firebase from 'firebase';
//import firebase from '@react-native-firebase/app';

function renderLoading(loading){
  if(loading){
    return <ActivityIndicator size = {'large'} color = {'#fff'}/>
  }
}


function FazerLogin(userName, password, navigation, dispatch){
  
  fazerLogin(userName, password, dispatch)
    .then((user) => {
      if (user){
        navigation.replace('home')
      }
    })
    .catch(error => {
      Alert.alert(getMessageByError(error.code));
    })
  
  
};

function getMessageByError(code){
  switch (code){
    case 'auth/invalid-email':
      return 'Usuário inválido.';
    case 'auth/wrong-password':
      return 'Senha inválida.';
    default:
      return 'Erro desconhecido.';
  }
}


export default function Login({navigation}) {

  const [loading, setLoading] = useState(false);
  
  const dispatch = useDispatch() 
  
  const [userName, setUser] = useState('');

  const [password, setPass] = useState('');

  const usuario = useSelector(state => state);


  useEffect(() => {
     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const credentials = {
      apiKey: "AIzaSyBTIpVzmDN4ZG2AwXC7tOR6UJracilqu6o",
      databaseURL: "https://meusetup-6b9bd.firebaseio.com",
      projectId: "meusetup-6b9bd",
      storageBucket: "meusetup-6b9bd.appspot.com",
      messagingSenderId: "264925693590",
      appId: "1:264925693590:web:6339b88e43a3fb27bda4b7",
      measurementId: "G-3B0LXN8GRD"
    };

    

    //if (!firebase.apps.length){
      // Initialize Firebase
      firebase.initializeApp(credentials);
    //}
    

  }, [])
  
  return (
    
    <View style = {styles.container}>
      <View>
        <StatusBar  backgroundColor = '#373A3C' barStyle = 'light-content'/>
      </View>
      <View style = {styles.header}>
        <Header />
      </View>
      <View style = {styles.body}>
        <FormRow>
          <TextInput style = {styles.input}
            autoCapitalize = 'none'
            placeholder = "Nome de usuário"
            autoCorrect = {false}
            value = {userName}
            onChangeText = {valor => {
              setUser(valor)
            }}
            
          />
        </FormRow>
        
        <FormRow>
          <TextInput style = {styles.input}
            secureTextEntry = {true}
            placeholder = "Senha"
            autoCorrect = {false}
            value = {password}
            onChangeText = {valor => {
              setPass(valor)
            }}
          />
        </FormRow>

        <FormRow>
          <TouchableOpacity style = {styles.btnSubmit} onPress = {() => {
            setLoading(true)
            FazerLogin(userName, password, navigation, dispatch)
          }}>
            <Image source = {arrow} />
          </TouchableOpacity>
          {renderLoading(loading)}
        </FormRow>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373A3C',
    color: '#fff'
  },

  body:{
    margin: 25,
    justifyContent: 'center',
    flex: 1
  },

  text:{
    color: '#fff'
  },

  input:{
    backgroundColor: 'transparent',
    borderRadius: 40,
    borderColor: '#fff',
    borderWidth: 1,
    color: '#fff',
    width: '90%',
    textAlign: 'center',
    fontSize: 17,
    padding: 10,
    marginBottom: 15
  },

  btnSubmit:{
    backgroundColor:'#F6CD40',
    borderRadius: 40,
    width: '50%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

