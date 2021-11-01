import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Zocial } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 


export function Musica() {
    return (
        <SafeAreaView style={{ flex: 1 ,padding:12,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
          <Feather name="music" size={65} color="blue" style={{opacity:0.6}} />
          <Text style={{opacity:0.6,fontSize:14}}>Puedes guardar tu música aquí</Text>
        </SafeAreaView>

    )
}