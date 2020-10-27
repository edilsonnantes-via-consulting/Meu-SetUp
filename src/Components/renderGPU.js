import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { set_GPU } from '../actions';


function renderGPU({navigation}){

  const dispatch = useDispatch();

    return(
        <FlatList style = {styles.Lista}
          data = {require('../assets/data/teste/GPU.json')}
          renderItem = {({item}) => <TouchableOpacity style = {styles.btnLista} onPress = {() => {
            set_GPU(item.nome,item.fonte,dispatch)
            navigation.replace('config')
            }}>
            <Text style = {styles.titleLista}>{item.nome}</Text>
            <Text style= {styles.textLista}>Memória de vídeo: {item.qtdMemoria}GB - {item.tipoMemoria}</Text>
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

export default renderGPU;