import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ReadQR } from '../Components/Perfil/ReadQR';
import { Qr } from '../Components/Perfil/Qr';
const Tab = createMaterialTopTabNavigator();

export const TabQr = () => {
    return (
        <Tab.Navigator
            initialRouteName="Qr"
            activeColor="#4834d4"
        >
            <Tab.Screen
                name="ReadQr"
                component={ReadQR}
                screenOptions={{
                    headerShown: false
                  }}
                options={{
                    
                    tabBarLabel: 'Escánear Qr',
                    tabBarColor: '#fff',
                    
                }}
            />
            <Tab.Screen
                name="Qr"
                component={Qr}
                options={{
                    tabBarLabel: 'Mi qr',
                    tabBarColor: '#fff',
                    
                }}
            />
        </Tab.Navigator>
    )
}


