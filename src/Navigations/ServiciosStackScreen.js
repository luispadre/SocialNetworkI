import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Feather } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';
import { Mensajes } from '../Components/Mensajes';
import { Text, TouchableOpacity, View, TextInput,SafeAreaView} from 'react-native';
import { ModalContext } from '../Context/Modal.Context';
import Buscar from '../Components/Buscar';
import { Servicios } from '../Components/Servicios';
import { MusicaStackScreen } from './MusicaStackScreen';
const ServiciosStack = createStackNavigator();




export const ServiciosStackScreen = ({ navigation }) => (
    <ServiciosStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      title:"Explorar"
    }}>
      <ServiciosStack.Screen name="Details" component={Servicios} options={{
        headerRight: () => (
          <Ionicons.Button name="ios-menu" size={25} backgroundColor="white" color="#1f65ff" onPress={() => navigation.openDrawer()}></Ionicons.Button>
        )
      }} />
       <ServiciosStack.Screen name="Musica" component={MusicaStackScreen}options={{ headerShown: false }}/>
  
    </ServiciosStack.Navigator>
  );
  
  