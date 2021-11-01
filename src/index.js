import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, useLinking } from '@react-navigation/native';

import { LogBox, StyleSheet, Text, View } from 'react-native';
import { LoaderIcon, LoaderScreen } from './UI/Loader';
import { RootStackScreen } from './Navigations';
import { Context } from './Context';
import { Modal } from './UI/Modal';
export default function(){
  LogBox.ignoreAllLogs()
  
    return(
      <Context>
        <ContentApp/>
      </Context>)
}


const ContentApp=()=>{

  return (
    <NavigationContainer
    fallback={<Text>Cargando...</Text>}>
    <RootStackScreen />
    <Modal />
    {/* <LoaderIcon animationType="fade" /> */}
      {/* <LoaderScreen /> */}
      {/* <StatusBar style="dark" /> */}
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent={false} />
    </NavigationContainer>
  )
}