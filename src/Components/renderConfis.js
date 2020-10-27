import React, {useState, useEffect} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, StatusBar, Image, FlatList, Alert, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { doLoad, loadConfig } from '../actions';

export default function Configs(dispatch, {navigation}){
    const [loading, setLoading] = useState(true);
    const usuario = useSelector(state => state.user)
    const [configs, setConfig] = useState([]); 
  
    useEffect(() => {
     const conf = firebase.firestore()
      .collection('/configuracao')
      .where('usuario', '==', usuario)
      .onSnapshot(querySnapshot => {
        const con = [];
  
        querySnapshot.forEach(documentSnapshot => {
          con.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setConfig(con);
        setLoading(false);
      });
    
      return () => conf();
    }, []);
  
    if(loading){
      return <ActivityIndicator size = {'large'} color = {'#fff'}/>
    }
   
    return (
        
      <FlatList
        data = {configs}
        renderItem = {({item}) =>
          <TouchableOpacity style={styles.add} onPress = {() =>{
              const load = item.config;
              const ID = item.key;
              doLoad(ID, dispatch);
              loadConfig(load, dispatch);
              navigation.navigate('config');
          }}
            onLongPress = {() => {
              Alert.alert("Deletar Configuração", "Deseja mesmo deletar a configuração?",[
                { text: "Não", style: 'cancel', onPress: () => {} },
                { text: "Sim", style: 'cancel', onPress: () => {
                  firebase
                    .firestore()
                    .collection('configuracao')
                    .doc(item.key)
                    .delete()
                } },
              ])
            }}
          >
              <Text style ={styles.text}>{item.nome}</Text>
          </TouchableOpacity>
      
      }
      showsVerticalScrollIndicator = {false}
      />
    )
    
  }


  const styles = StyleSheet.create({
    
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
    activity:{
      color: '#fff'
    }
    
    
  
  });