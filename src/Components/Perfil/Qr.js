import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import QRCode from 'react-native-qrcode-svg'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export function Qr() {
    return (
        <View style={{ display: 'flex', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center', flex: 2, paddingTop: 65, }}>
                    <QRCode
                        value='hello world'
                        color='#f2f2f2'
                        backgroundColor='#000'
                        size={200}
                        codeStyle='sharp'
                    />
                </View>
                <View style={{ display: 'flex', alignItems: 'center', flex: 1, paddingTop: 65 }}>
                    <MaterialIcons name="qr-code-scanner" size={24} color="#95afc0" />
                    <Text style={{ color: "#95afc0" }}>Ecanea este código usando la cámara</Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'center', flexDirection: 'row', }}>
                    <View style={{ padding: 3 }}>
                        <Button color="#1f65ff" contentStyle={{ backgroundColor: 'white', borderColor: 'transparent', borderWidth: 2 }}
                            icon={() => <FontAwesome name="share" size={24} color="#1f65ff" />} mode="text" onPress={() => console.log('Pressed')}>
                            Compartir</Button>
                    </View>
                    <View style={{ padding: 3 }}>
                        <Button color={"#1f65ff"} contentStyle={{ backgroundColor: 'white', borderColor: 'transparent', borderWidth: 2 }}
                            icon={() => <Entypo name="align-bottom" size={24} style={{ color: '#1f65ff' }} />} mode="text" onPress={() => console.log('Pressed')}>

                            Guardar</Button>
                    </View>
                </View>
                <View style={{ display: 'flex', alignItems: 'center', flex: 1, paddingTop: 65 }}>
                    <Text style={{color:"#1f65ff"}}>¿Qué son los códigos QR?</Text>
                </View>
            </View>

        </View>
    )
}