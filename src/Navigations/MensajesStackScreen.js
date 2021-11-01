import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Feather } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';
import { Mensajes } from '../Components/Mensajes';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { ModalContext } from '../Context/Modal.Context';
import Buscar from '../Components/Buscar';
const MensajeStack = createStackNavigator();
export const MensajeStackScreen = ({ navigation }) => {
  const { changeStatus, setType } = useContext(ModalContext)

  return (
    <MensajeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <MensajeStack.Screen name="Mensaje" component={Mensajes} options={{
        title: 'Mensajes',
        headerRight: () => {
          return (
            <View style={{ paddingRight: 12, flexDirection: 'row' }}>
              <TouchableOpacity style={{ paddingRight: 18 }} onPress={() => { changeStatus(true); setType('optContactosMensajes') }}>
                <Entypo name="new-message" size={24} color="#1f65ff" />
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => { navigation.navigate("BuscarMensajes") }}>
                <Feather name="search" size={24} color="#1f65ff" />
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingRight: 18 }} onPress={() => { changeStatus(true); setType('optMasMensajes') }}>
                <Entypo name="dots-three-horizontal" size={24} color="#1f65ff" />
              </TouchableOpacity>
            </View>
          )
        }
      }} />
      <MensajeStack.Screen name="BuscarMensajes" component={Buscar} options={{
        title: '',
        headerRight: () => {
          return (
            <View style={{ paddingRight: 12, flexDirection: 'row' }}>
              <TextInput style={{ paddingRight: 18 }} placeholder="buscar" />
              <Feather style={{ paddingRight: 18 }} name="search" size={24} color="#1f65ff" />
            </View>
          )
        }
      }} />
    </MensajeStack.Navigator>
  )
}

