import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-paper'
export function AddFriend() {
    return (
        <View style={{ flexDirection: 'column', display: 'flex', backgroundColor: 'white', flex: 1 }}>
            <ScrollView overflow={'hidden'} removeClippedSubviews={true}>
            <View style={{  backgroundColor: "#f2f2f2",flex:0,paddingTop:12,paddingBottom:12}}>
                <Button color={"#1f65ff"} contentStyle={{ backgroundColor: '#f2f2f2', borderColor: 'transparent', borderWidth: 2, justifyContent: 'flex-start' }}
                    mode="text" onPress={() => console.log('Pressed')}>
                    Añadir usando código QR
                </Button>
                <Button color={"#1f65ff"} contentStyle={{ backgroundColor: '#f2f2f2', borderColor: 'transparent', borderWidth: 2, justifyContent: 'flex-start' }}
                    mode="text" onPress={() => console.log('Pressed')}>
                    Buscar por nombre
                </Button>
                <Button color={"#1f65ff"} contentStyle={{ backgroundColor: '#f2f2f2', borderColor: 'transparent', borderWidth: 2, justifyContent: 'flex-start' }}
                    mode="text" onPress={() => console.log('Pressed')}>
                    Invitar vía enlace
                </Button>
            </View>
            <View style={{padding:12,flex:1}}>
                <Text style={{fontWeight:'300',fontSize:18}}>Importar amigos</Text>
                <View style={{flexDirection:'row',marginTop:18}}>
                <AddButtonFriend label="Contactos"/>
                <AddButtonFriend label="OK"/>
                <AddButtonFriend label="Gmail"/>
                <AddButtonFriend label="Facebook"/>
                
                </View>
            </View>
            
        </ScrollView>
    </View>
    )
}

const AddButtonFriend = ({ label, children }) => {

    return (
        <TouchableOpacity style={{ flex: 1, alignItems: 'center', }}  >
            {children}
            <Text style={{ color: "#1f65ff" }}>{label}</Text>
        </TouchableOpacity>
    )
}