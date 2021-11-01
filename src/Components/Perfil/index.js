import React from 'react'

import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Button } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
export function Perfil({navigation}) {

    return (
        <SafeAreaView style={{ flexDirection: 'column', display: 'flex', backgroundColor: 'white', flex: 1 }}>
            <ScrollView overflow={'hidden'} removeClippedSubviews={true}>
                <View style={{ flexDirection: 'row', flex: 0 }}>
                    <View style={{ padding: 12 }}>
                        <View style={{ width: 110, height: 110, borderRadius: 150, backgroundColor: '#000' }} />
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: 18 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 17 }}>Yarel Splash</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 15, color: "#1f65ff" }}>Establecer estado</Text>
                        <Text>En linea <FontAwesome name="mobile" size={24} color="black" /></Text>
                    </View>
                </View>
                <View style={{ display: 'flex' }}>
                    <Button color={"#1f65ff"} contentStyle={{ backgroundColor: '#f2f2f2', borderColor: 'transparent', borderWidth: 2 }}
                        mode="text" onPress={() => console.log('Pressed')}>
                        Editar
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, display: 'flex', padding: 12, alignSelf: 'center', justifyContent: 'center' }}>
                    <ButtonOpcionPerfil label="Historia">
                        <AntDesign name="camerao" size={24} color="#1f65ff" />
                    </ButtonOpcionPerfil>
                    <ButtonOpcionPerfil label="Entrada" >
                        <Entypo name="pencil" size={24} color="#1f65ff" />
                    </ButtonOpcionPerfil>
                    <ButtonOpcionPerfil label="Fotos">
                        <Foundation name="photo" size={24} color="#1f65ff" />
                    </ButtonOpcionPerfil>
                    <ButtonOpcionPerfil label="Clip">
                        <Foundation name="photo" size={24} color="#1f65ff" />
                    </ButtonOpcionPerfil>
                </View>
                <View style={{ borderWidth: 1, borderColor: "#f2f2f2" }}>
                    <Button color={"#1f65ff"} contentStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', borderWidth: 2, justifyContent: 'flex-start' }}
                        mode="text" onPress={() => console.log('Pressed')}>
                        Añadir escuela
                    </Button>
                    <Button color={"#1f65ff"} contentStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', borderWidth: 2, justifyContent: 'flex-start' }}
                        mode="text" onPress={() => console.log('Pressed')}>
                        Añadir compañía
                    </Button>
                    <Button color={"#1f65ff"} contentStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', borderWidth: 2, justifyContent: 'flex-start' }}
                        mode="text" onPress={() => console.log('Pressed')}>
                        Información adicional
                    </Button>
                </View>

                <View style={{ borderWidth: 1, borderColor: "#f2f2f2" }}>
                    <Button color={"#1f65ff"} contentStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', borderWidth: 2, justifyContent: 'flex-start' }}
                        mode="text" onPress={() => navigation.navigate("AddFriend")}>
                        Encontrar amigos
                    </Button>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
const ButtonOpcionPerfil = ({ label, children }) => {

    return (
        <TouchableOpacity style={{ flex: 1, alignItems: 'center', }}  >
            {children}
            <Text style={{ color: "#1f65ff" }}>{label}</Text>
        </TouchableOpacity>
    )
}