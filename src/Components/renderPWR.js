import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { set_PWR } from '../actions';


function renderPWR({navigation}){
    
  const dispatch = useDispatch();
  const config = useSelector(state => state.config);
  const fonte = require('../assets/data/teste/PWR.json');
  const renderFonte = fonte.filter(fonte => fonte.potencia >= config.GPU.pwr);
  
  return(
        <FlatList style = {styles.Lista}
          data = {renderFonte}
          renderItem = {({item}) => 
          <TouchableOpacity style = {styles.btnLista} onPress = {() => {
            set_PWR(item.nome,item.potencia,dispatch)
            navigation.replace('config')
          }}>
            <Text style = {styles.titleLista}>{item.nome}</Text>
            <Text style= {styles.textLista}>Potência: {item.potencia}W</Text>
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

export default renderPWR;