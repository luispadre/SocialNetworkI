import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 


import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { PerfilStackScreen } from './PerfilStackScreen'
import { HomeStackScreen } from './HomeStackScreen'
import { MensajeStackScreen } from './MensajesStackScreen';
import { ServiciosStackScreen } from './ServiciosStackScreen';


const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const TabsScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#4834d4"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#fff',
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-home" color={"#4834d4"} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Servicios"
      component={ServiciosStackScreen}
      options={{
        tabBarLabel: 'Servicios',
        tabBarColor: '#fff',
        tabBarIcon: ({ color }) => (
          <AntDesign name="appstore-o" size={26} color="#4834d4" />
        ),
      }}
    />
    <Tab.Screen
      name="Mensajes"
      component={MensajeStackScreen}
      options={{
        tabBarLabel: 'Mensajes',
        tabBarColor: '#fff',
        tabBarIcon: ({ color }) => (
          <Feather name="message-circle" color={"#4834d4"} size={26}  />
        ),
      }}
    />
    <Tab.Screen
      name="Perfil"
      component={PerfilStackScreen}
      options={{
        tabBarLabel: 'Perfil',
        tabBarColor: '#fff',
        tabBarIcon: ({ color }) => (
          <Ionicons name="person-circle-outline" size={26} color="#4834d4" />
        ),
      }}
    />
  </Tab.Navigator>
);




