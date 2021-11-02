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
        title:"Hyandi",
        headerStyle:{alignItems:'center',justifContent:'center'},
        // header:()=>(<Ionicons name="add-circle" size={26} color="blue" style={{padding:12}}/>),
        headerLeft:()=>(<Ionicons name="add-circle" size={26} color="red" style={{padding:12}}/>),
        headerRight:()=>(<Ionicons name="add-circle" size={26} color="red" style={{padding:12}}/>),
      }} />
    </HomeStack.Navigator>
  );
  