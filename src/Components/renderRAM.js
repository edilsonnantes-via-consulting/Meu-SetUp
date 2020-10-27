import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { set_RAM } from '../actions';


function renderRAM({navigation}){
  
  const dispatch = useDispatch();
  const config = useSelector(state => state.config);
  const memoria = require('../assets/data/teste/RAM.json');
  const renderMem = memoria.filter(memoria => memoria.velocidadeMemoria <= config.MB.vel);
  
  return(
        <FlatList style = {styles.Lista}
          data = {renderMem}
          renderItem = {({item}) => 
          <TouchableOpacity style = {styles.btnLista} onPress = {() => {
            set_RAM(item.nome,item.velocidadeMemoria,dispatch)
            navigation.replace('config')}}>
            <Text style = {styles.titleLista}>{item.nome}</Text>
            <Text style= {styles.textLista}>Velocidade: {item.velocidadeMemoria} MHz Capacidade: {item.tamanho} GB</Text>
            </TouchableOpacity>}
          keyExtractor = {item => item.nome}
          showsVerticalScrollIndicator = {false}
        />
    );
}

const styles = StyleSheet.create({
    
    titleLista:{
      paddingHorizontal: 40,
      color: '#fff',
      fontSize: 17
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
      marginLeft: 15,
      marginRight: 15
    }
  });

export default renderRAM;