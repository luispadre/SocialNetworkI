import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { Entypo } from '@expo/vector-icons';



export function Explorar() {
    return (
        <View>
            <Text>{' '}</Text>
            
            
            <NuevosLanzamientos/>
            
        </View>
    )
}
import { Audio } from 'expo-av';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { ModalContext } from '../../../Context/Modal.Context';



const NuevosLanzamientos = () => {
    const { changeStatus, setType } = useContext(ModalContext)
    const [sound, setSound] = React.useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync({
            uri: 'https://cdns-preview-e.dzcdn.net/stream/c-e8e86ad24345797f7a71076e37fd2118-4.mp3',

        });
        Audio.setAudioModeAsync({ staysActiveInBackground: true })

        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View >
            <Text style={{ fontWeight: "400", fontSize: 16 }}>Nuevos Lanzamientos</Text>
            <FlatList data={[1,2,3,4]}
            renderItem={()=>(<TouchableOpacity style={{ flexDirection: 'row', display: 'flex', backgroundColor: 'white' }}>
            <View style={{ flex: 1.5, display: 'flex' }}>
                <TouchableOpacity onPress={playSound} style={{ backgroundColor: 'red' }}>
                    <Text>IMG</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 5, display: 'flex' }}>
                <TouchableOpacity onPress={playSound} style={{ backgroundColor: 'red' }}>
                    <Text style={{ fontWeight: "300" }}>
                        O ato de Vencer
                    </Text>
                    <Text style={{ opacity: .5 }}>
                        Mago de Tarso
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { changeStatus(true); setType('optServiciosMusic') }}>
                    <Entypo name="dots-three-vertical" size={24} color="#000" />
                </TouchableOpacity>

            </View>
        </TouchableOpacity>)}
            />
            
        </View>
    )
}