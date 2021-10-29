import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, useLinking } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';
import { LoaderIcon, LoaderScreen } from './UI/Loader';
import { RootStackScreen } from './Navigations';
import { Context } from './Context';
export default function(){
    return(
      <Context><ContentApp/></Context>)
}


const ContentApp=()=>{

  return (
    <NavigationContainer
    fallback={<Text>Cargando...</Text>}>
    <RootStackScreen />
    {/* <LoaderIcon animationType="fade" /> */}
      {/* <LoaderScreen /> */}
    </NavigationContainer>
  )
}