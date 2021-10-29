import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {View,Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { Perfil } from '../Components/Perfil';




const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const PerfilStack=createStackNavigator();
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
            <Ionicons name="ios-home" color={"#4834d4"} size={26}  />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" color={color} size={26} />
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



const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft: () => (
            <Ionicons.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Ionicons.Button>
        )
        }} />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={HomeScreen} options={{
        headerLeft: () => (
            <Ionicons.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Ionicons.Button>
        ),
        headerRight:()=>(
          <React.Fragment>
            <View style={{flexDirection:'row'}}>
            <Ionicons.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Ionicons.Button>
            <Ionicons.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Ionicons.Button>
            </View>
          </React.Fragment>
        )
        }} />
</DetailsStack.Navigator>
);


function HomeScreen(){
  return(
    <View>
      <Text>Hola</Text>
    </View>
  )
}



const PerfilStackScreen = ({ navigation }) => (
  <PerfilStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <PerfilStack.Screen name="Home" component={Perfil} options={{
      title: '',
      headerLeft: () => (
        <React.Fragment>
          <View style={{flexDirection:'column',padding:10}}>
          <Text>id213434</Text>
          <Text style={{color:"#1f65ff"}}>Elige un nombre corto</Text>
          </View>
        </React.Fragment>
      ),
      headerRight:()=>(
        <React.Fragment>
          <View style={{flexDirection:'row',padding:10}}>
          <Ionicons.Button backgroundColor="transparent" name="ios-qr-code" size={25} color="#1f65ff" onPress={() =>{}}></Ionicons.Button>
          <Ionicons.Button backgroundColor="transparent" name="ios-menu" size={25} color="#1f65ff" onPress={() => {}}></Ionicons.Button>
          </View>
        </React.Fragment>
      )
    }} />
  </PerfilStack.Navigator>
);
