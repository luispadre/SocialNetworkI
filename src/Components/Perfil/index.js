import React from 'react'

import {View,Text} from 'react-native'
export function Perfil(){

    return(
        <View>
            <View style={{flexDirection:'row',display:'flex'}}>
                <View style={{flex:1}}>

                </View>
                <View style={{flexDirection:'column',flex:2}}>
                <Text>Yarel Splash</Text>
                <Text>Establecer estado</Text>
                <Text>En linea </Text>
                </View>
            </View>
        </View>
    )
}