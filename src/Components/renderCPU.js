import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import {set_CPU} from '../actions';



function renderCpu({navigation}) {
  
  const dispatch = useDispatch();
  
  return(
        <FlatList style = {styles.Lista}
            data = {require('../assets/data/teste/CPU.json')}
            renderItem = {({item}) => 
                <TouchableOpacity style = {styles.btnLista} onPress = {() => {
                  set_CPU(item.nome, item.soquete, dispatch)
                    navigation.replace('config')
                  }}>
                <Text style = {styles.titleLista}>{item.nome}</Text>
                <Text style= {styles.textLista}>Soquete:{item.soquete} Núcleos:{item.cores} Threads:{item.threads} Clock Base:{item.baseClock} Clock Máximo:{item.boostClock}</Text>
                </TouchableOpacity>}
            keyExtractor = {item => item.nome}
            showsVerticalScrollIndicator = {false}
            />
    );
}

const styles = StyleSheet.create({
    
  
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

export default renderCpu;