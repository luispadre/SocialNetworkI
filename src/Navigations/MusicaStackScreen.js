import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Feather } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';
import { Mensajes } from '../Components/Mensajes';
import { Text, TouchableOpacity, View, TextInput,SafeAreaView} from 'react-native';
import { ModalContext } from '../Context/Modal.Context';
import Buscar from '../Components/Buscar';
import { Musica } from '../Components/Servicios/Musica';
import { TabMusicScreen } from './TabMusicScreen';
const MusicaStack = createStackNavigator();

export const MusicaStackScreen = ({ navigation }) => (
    <MusicaStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      title:"Musica"
    }}>
      <MusicaStack.Screen name="Details" component={TabMusicScreen} options={{
        headerRight: () => (
          <Ionicons.Button name="ios-menu" size={25} backgroundColor="white" color="#1f65ff" onPress={() => navigation.openDrawer()}></Ionicons.Button>
        )
      }} />
  
    </MusicaStack.Navigator>
  );
  
  