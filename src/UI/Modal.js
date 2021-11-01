import React, { useContext, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Button } from 'react-native-paper';
import { ModalContext } from '../Context/Modal.Context';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


export const Modal = (props) => {
    const { children, data } = props
    const { status, changeStatus, type } = useContext(ModalContext)
    const modalizeRef = useRef(null);

    useEffect(() => {
        if (status) modalizeRef.current?.open()
    }, [status])

    return (
        <>
            <Modalize ref={modalizeRef}
                handlePosition="outside"
                // withHandle={false}
                modalHeight={getHeight(type)}
                overlayStyle={{ backgroundColor: 'rgba(29, 33, 41, 0.2)' }}
                onClose={() => changeStatus(false)}
                HeaderComponent={<Header />}
                FooterComponent={<Footer />}>
                {children ? children : <Content />}
            </Modalize>
        </>
    );
};

function Header(props) {
    const { type } = useContext(ModalContext)

    switch (type) {
        case 'optMasMensajes':
            return (<></>)
        case 'optContactosMensajes':
            return (<>
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:12}}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "700" }}>Nuevo Mensaje</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => { }}>
                            <Feather name="search" size={24} color="#1f65ff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </>)
        default:
            return (
                <></>
            )
    }
}
function Content(props) {
    const { type } = useContext(ModalContext)

    switch (type) {
        case 'optMasMensajes':
            return (<>
                <View>
                    <Button color={"#1f65ff"} contentStyle={{ backgroundColor: 'white', borderColor: 'transparent', borderWidth: 2 }}
                        mode="text" onPress={() => console.log('Pressed')}>
                        Limpiar lista de chat
                    </Button>

                    <Button color={"#1f65ff"} contentStyle={{ backgroundColor: 'white', borderColor: 'transparent', borderWidth: 2 }}
                        mode="text" onPress={() => console.log('Pressed')}>
                        Marcar todo como leido
                    </Button>

                </View>

            </>)
         case 'optContactosMensajes':
            return (<>
            <View>
            <Button color={"#1f65ff"} contentStyle={{ backgroundColor: 'white', borderColor: 'transparent', borderWidth: 2,alignSelf:"flex-start"  }}
                        mode="text" onPress={() => console.log('Pressed')} icon={()=>(<Ionicons name="ios-people-outline" size={24} color="#1f65ff" />)}>
                    Crear grupo de Chat
                </Button>
                <Button color={"#1f65ff"} contentStyle={{ backgroundColor: 'white', borderColor: 'transparent', borderWidth: 2,alignSelf:"flex-start" }}
                        mode="text" onPress={() => console.log('Pressed')} icon={()=>(<AntDesign name="contacts" size={24} color="#1f65ff" />)}>
                    Lista de contactos
                </Button>
            </View>
            </>)

        default:
            return (
                <>
                    <Text>asd</Text>
                </>
            )
    }
}
function Footer(props) {
    const { type } = useContext(ModalContext)

    switch (type) {
        case 'optMasMensajes':
            return (<>
                <View style={{ backgroundColor: '#f2f2f2', height: 12, width: '100%' }} />
                <View style={{ paddingBottom: 12 }}>

                    <Button color={"#1f65ff"} contentStyle={{ backgroundColor: 'white', borderColor: 'transparent', borderWidth: 2 }}
                        mode="text" onPress={() => console.log('Pressed')}>
                        Cancelar
                    </Button>
                </View>
            </>)
        default:
            return (
                <></>
            )
    }
}

function getHeight(type) {
    switch (type) {
        case "optMasMensajes":
            return 150;
        default:
            return
    }
}