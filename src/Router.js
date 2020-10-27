import React from 'react';
import config from './screens/config';
import processadores from './screens/processadores';
import Login from './screens/Login';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import placamae from './screens/placamae';
import memoria from './screens/memoria';
import placaVideo from './screens/placaVideo';
import fonte from './screens/fonte';
import Footer from './Components/footer';
import Help from './screens/help';


const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{
        headerShown: false, 
        gestureEnabled: true, 
        gestureDirection: 'horizontal-inverted', 
        animationEnabled: true,
      }}>
        
        <Stack.Screen name = 'login' component = {Login}/>
        <Stack.Screen name = 'home' component = {Home}/>
        <Stack.Screen name = 'config' component = {config}/>
        <Stack.Screen name = 'cpu' component = {processadores}/>
        <Stack.Screen name = 'mb' component = {placamae}/>
        <Stack.Screen name = 'ram' component = {memoria}/>
        <Stack.Screen name = 'video' component = {placaVideo}/>
        <Stack.Screen name = 'fonte' component = {fonte}/>
        <Stack.Screen name = 'help' component = {Help}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}