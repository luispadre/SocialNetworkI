import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Zocial } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'
export function Servicios() {
    return (
        <SafeAreaView style={{ flex: 1 ,padding:12}}>
            <FlatList
            numColumns={3}
                contentContainerStyle={{justifyContent:'center',display:'flex',backgroundColor:'white' }}
                data={serviciosList}
                renderItem={({ item, index, separators }) => (
                    <ButtonServicio {...{ item }} />
                )}
            />
        </SafeAreaView>

    )
}

const ButtonServicio = (props) => {
    const navigation = useNavigation()
    if (props?.item) {
        return (
            <TouchableOpacity onPress={()=>{navigation.push("Musica")}} style={{ flex:1,padding: 12, justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                <props.item.Ico />
                <Text>{props.item.label}</Text>
            </TouchableOpacity>
        )
    }
    return null

}

const serviciosList = [
    { label: "Amigos",navigate:"Musica", Ico: () => (<Ionicons name="people-outline" size={35} color="red" />) },
    { label: "Comunidades",navigate:"Musica", Ico: () => (<FontAwesome name="group" size={35} color="orange" />) },
    { label: "Musica",navigate:"Musica", Ico: () => (<Ionicons name="musical-notes-outline" size={35} color="blue" />) },
    { label: "Videos",navigate:"Musica", Ico: () => (<MaterialIcons name="video-collection" size={35} color="#e84393" />) },
    { label: "Juegos",navigate:"Musica", Ico: () => (<Ionicons name="ios-game-controller-outline" size={35} color="green" />) },
    { label: "Pódcast",navigate:"Musica", Ico: () => (<Zocial name="podcast" size={35} color="black" />) },
    { label: "Compras",navigate:"Compras", Ico: () => (<FontAwesome5 name="shopping-bag" size={35} color="#e84393" />) },
    { label: "Encuentro",navigate:"Encuentro", Ico: () => (<FontAwesome5 name="shopping-bag" size={35} color="#e84393" />) },
    { label: "Audio Chat",navigate:"AudioChat", Ico: () => (<FontAwesome5 name="shopping-bag" size={35} color="#e84393" />) },
    { label: "FiestaVirtual",navigate:"FiestaVirtual", Ico: () => (<FontAwesome5 name="shopping-bag" size={35} color="#e84393" />) },
    { label: "Quiz",navigate:"Quiz", Ico: () => (<FontAwesome5 name="shopping-bag" size={35} color="#e84393" />) },
    
]