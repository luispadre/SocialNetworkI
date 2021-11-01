import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Home } from '../Components/Home';
const HomeStack = createStackNavigator();
export const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={Home} options={{
        title: 'ElvisProject',
      
      }} />
    </HomeStack.Navigator>
  );
  