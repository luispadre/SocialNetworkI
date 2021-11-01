import React from 'react'
import { Text, View, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export function Status({ route }) {
    const { item } = route.params
    return (
        <View style={{
            backgroundColor: 'black', height: '100%', position: 'relative', justifyContent: 'center',
            alignItems: 'center'
        }}>
            <StatusBar backgroundColor="black" barStyle={"light-content"} />
            <View style={{ height: 3, width: '95%', borderWidth: 1, backgroundColor: 'gray', position: 'absolute', top: 18 }}>
                <View style={{ height: '100%', backgroundColor: 'white', width: '50%' }} />
            </View>
            <View style={{ padding: 15, flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 12, left: 0, width: '90%' }}>
                <View style={{ borderRadius: 100, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: item.image }} style={{
                        borderRadius: 100, backgroundColor: 'orange', resizeMode: "cover", width: '92%', height: '92%'
                    }} />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                    <Text style={{ color: 'white', fontSize: 15, paddingLeft: 10 }}>{item?.name}</Text>
                    <TouchableOpacity>
                        <Ionicons name="close" style={{ fontSize: 20, color: 'white', opacity: 0.6 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={{ uri: item?.img }} style={{ position: 'absolute', width: '100%', height: "80%" }} />
            <View style={{ bottom: 26, height: 30, width: '100%', position: 'absolute', display: 'flex', flexDirection: 'row', alignContent: 'space-between'}}>
                <View style={{ flex: 1, flexDirection: 'row',marginLeft:12 }}>
                    <View>
                        <TouchableOpacity style={{ borderWidth: 1, borderRadius: 100, borderColor: 'white' }}>
                            <Ionicons name="ios-eye-outline" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row-reverse',maginRight:12 }}>
                    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 100, borderColor: 'white' }}>
                        <Entypo name="dots-three-horizontal" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 100, borderColor: 'white' }}>
                        <Ionicons name="arrow-redo" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}