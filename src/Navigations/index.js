/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { NoAuthStackNavigation } from './NoAuthStackNavigation';
import { TabsScreen } from './TabsScreen';

const RootStack = createStackNavigator()

export const RootStackScreen = () => {
  // const { token,isNewUser} = useContext(DataContext)
  return (
  
  <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="App" component={TabsScreen} options={{ animationEnabled: false }} />
  </RootStack.Navigator>)
}