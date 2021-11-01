import React from 'react'

import {View,Text,TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import {Modal} from '../../UI/Modal'

export function Mensajes(){
    return(
        <View style={{display:'flex',height:"100%"}}>
            <MensajeEmpty/>
        </View>
    )
}

const MensajeEmpty=()=>{

    return(
        <View style={{display:'flex',flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
            <AntDesign name="message1" size={50} color="black" style={{opacity:0.5}}/>
            <Text style={{paddingTop:18,opacity:0.5}}>No hay chats</Text>
            {/* <ButtonMensajeEmpty label="Mostrar todos los mensajes"/> */}
        </View>
    )
}

const ButtonMensajeEmpty = ({ label }) => {
    return (
        <TouchableOpacity style={{ alignItems: 'center', paddingTop:18}}  >
            <Text style={{ color: "#1f65ff" }}>{label}</Text>
        </TouchableOpacity>
    )
}