import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ReadQR } from '../Components/Perfil/ReadQR';
import { Qr } from '../Components/Perfil/Qr';
import { Musica } from '../Components/Servicios/Musica';
import { Explorar } from '../Components/Servicios/Musica/Explorar';
const Tab = createMaterialTopTabNavigator();

export const TabMusicScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="MiMusica"
            activeColor="#4834d4"
        >
            <Tab.Screen
                name="MiMusica"
                component={Musica}
                screenOptions={{
                    headerShown: false
                  }}
                options={{
                    
                    tabBarLabel: 'Mi música',
                    tabBarColor: '#fff',
                    
                }}
            />
            <Tab.Screen
                name="Explorar"
                component={Explorar}
                options={{
                    tabBarLabel: 'Explorar',
                    tabBarColor: '#fff',
                    
                }}
            />
        </Tab.Navigator>
    )
}


