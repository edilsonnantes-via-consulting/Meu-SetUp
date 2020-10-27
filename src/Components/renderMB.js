import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {set_MB} from '../actions';


function renderMB({navigation}){

    const dispatch = useDispatch();
    const config = useSelector(state => state.config);
    const placa = require('../assets/data/teste/MB.json');
    const renderMB = placa.filter(placa => placa.soquete === config.CPU.soq)
    
    return(
        <FlatList style = {styles.Lista}
          data = {renderMB}
          renderItem = {({item}) => 
          <TouchableOpacity style = {styles.btnLista} onPress = {() => {
            set_MB(item.nome, item.soquete, item.velocidadeMemoria, dispatch)
            navigation.replace('config')}}>
            <Text style = {styles.titleLista}>{item.nome}</Text>
            <Text style= {styles.textLista}>Soquete: {item.soquete} Memória DDR4: {item.velocidadeMemoria} MHz</Text>
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
      marginLeft: 15,
      marginRight: 15
    }
  });

  export default renderMB;