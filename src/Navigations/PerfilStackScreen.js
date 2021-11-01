import React, { useEffect } from 'react'
import { View, Text, BackHandler, Alert } from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import { Perfil } from '../Components/Perfil';
import { TabQr } from './TabPerfil';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from '@react-navigation/native';
import { AddFriend } from '../Components/Perfil/AddFriend';

const PerfilStack = createStackNavigator();
const popAction = StackActions.pop(1);

export const PerfilStackScreen = ({ navigation }) => {

  useEffect(() => {
    const backAction = () => {
      navigation.dispatch(popAction);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (<PerfilStack.Navigator>
    <PerfilStack.Screen name="Home" component={Perfil} options={{
      title: '',
      headerLeft: () => (
        <React.Fragment>
          <View style={{ flexDirection: 'column', padding: 10 }}>
            <Text>id213434</Text>
            <Text style={{ color: "#1f65ff" }}>Elige un nombre corto</Text>
          </View>
        </React.Fragment>
      ),
      headerRight: () => (
        <React.Fragment>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Ionicons.Button backgroundColor="transparent" selectionColor="transparent" name="ios-qr-code" size={25} color="#1f65ff" onPress={() => {
              navigation.navigate('QR')
            }}></Ionicons.Button>
            <Ionicons.Button backgroundColor="transparent" name="ios-menu" size={25} color="#1f65ff" onPress={() => { }}></Ionicons.Button>
          </View>
        </React.Fragment>
      )
    }} />
    <PerfilStack.Screen name="QR" options={{ headerShown: false, }} component={TabQr} />
    <PerfilStack.Screen name="ReadQR" options={{ headerShown: false, }} component={PerfilStackScreen} />
    <PerfilStack.Screen name="AddFriend" options={{
      headerRight: () => {
        <Ionicons.Button backgroundColor="#1f65ff" name="ios-menu" size={25} color="#1f65ff" onPress={() => { }} />
      },
      headerTitle: "Añadir amigo",
      headerTintColor: '#000'
    }} component={AddFriend} />
  </PerfilStack.Navigator>
  );
}
