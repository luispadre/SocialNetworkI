import React from 'react'
import { View, Text, Image, ScrollView, Dimensions,StyleSheet,Animated } from 'react-native'
import { Stories } from "./../../UI/Stories"
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import colors from '../../UI/Colors';
import { color } from 'react-native-reanimated';
import Colors from '../../UI/Colors';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'


export function Home() {
    return (
        // <ScrollView>
            // <Stories />
            // {/* <Post /> */}
            
            <Gallery/>
        // </ScrollView>
    )
}


const Post = () => {
    return (
        <View style={{ backgroundColor: 'white', margin:8,padding:12,borderRadius:8}}>
            <View style={{ flexDirection: 'row', display: 'flex' }}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{width: 68, height: 68, backgroundColor: 'transparent',justifyContent: 'center',alignItems: 'center'}}>
                        <Image source={{ uri: "https://www.jonathanhecl.com/img/me.png" }} style={{ resizeMode: 'cover', width: '92%', height: '92%', borderRadius: 100, backgroundColor: 'orange' }} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text>GS</Text>
                        <Text>30 octubre a las 2:12</Text>
                    </View>
                </View>
                <View>
                    <Entypo name="dots-three-horizontal" size={24} color="#000" />
                </View>
            </View>
            <View>
            <Image source={{ uri: "https://www.jonathanhecl.com/img/me.png" }} style={{ resizeMode: 'contain',width: '100%', height: 250}} />
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:12}}>
                <View style={{flexDirection:'row',justifyContent:'space-around',display:'flex',flex:1}}>
                <AntDesign name="hearto" size={24} color="black" style={{flex:1}}/>
                <Ionicons name="chatbubble-outline" size={24} color="black" style={{flex:1}} />
                <FontAwesome5 name="share-square" size={24} color="black" style={{flex:1}} />
                </View>
                <View style={{flexDirection:'row-reverse',flex:1}}>
                <Text>1</Text>
                <Ionicons name="eye-outline" size={24} color="black" />
                </View>
            </View>
            </View>

        </View>
    )
}


const {width,height}=Dimensions.get('screen')

const ITEM_HEIGHT=height*0.7;
const DOT_SIZE=10;
const DOT_SPACING=DOT_SIZE

export function Gallery(){

    
    const product=data
    const scrollY=React.useRef(new Animated.Value(0)).current
    const translateY=Animated.divide(scrollY,ITEM_HEIGHT).interpolate({
        inputRange:[0,1],
        outputRange:[0,DOT_SIZE+DOT_SPACING]
    });

    const bottomSheetRef=React.useRef(null);
    const snapPoints=Reac.useMemo(
        ()=>[height-ITEM_HEIGHT,height/2,height],
        [],
    )


    return(
        <>{product&&<View style={styles.container}>
            <View style={styles.subContainer}>
                <Animated.FlatList
                data={product.images}
                showsVerticalScrollIndicator={false}
                keyExtractor={(_,index)=>index.toString()}
                snapToInterval={ITEM_HEIGHT}
                decelerationRate="fast"
                bounces={false}
                // Add animation scroll
                onScroll={Animated.event(
                    [{nativeEvent:{contentOffset:{y:scrollY}}}],
                    {useNativeDriver:true}
                )}
                renderItem={({item})=>{
                    return(<Image source={{uri:item}} style={{width,height:ITEM_HEIGHT,resizeMode:'cover'}}/>)
                }}
                />
                <View style={{position:'absolute',bottom:ITEM_HEIGHT/3,left:20}}>
                    {product.images.map((_,i)=>{
                        return(<View style={{height:DOT_SIZE,width:DOT_SIZE,backgroundColor:colors.colors.pink,marginBottom:DOT_SIZE}}/>)
                    })}
                    <Animated.View style={[styles.animatedDot,{
                        transform:[
                            {translateY}
                        ]
                    }]}/>
                </View>
            </View>
            <BottomSheet
            ref={bottomSheetRef}
            initialSnapIndex={0}
            snapPoints={snapPoints}
            >
                <BottomSheetScrollView contentContainer={styles.bottomSheetContainer}
                style={styles.bottomSheet}
                >
                    <Text>Heere will b out menu</Text>
                </BottomSheetScrollView>
            </BottomSheet>
            </View>}</>
    )
}

const styles=StyleSheet.create(
    {
        container:{height:height},
        subContainer:{width,height:ITEM_HEIGHT},
        animatedDot:{
            position:'absolute',
            top:-DOT_SIZE/2,
            left:-DOT_SIZE/2,
            height:DOT_SIZE*2,
            width:DOT_SIZE*2,
            borderWidth:1,
            borderColor:Colors.colors.pink,
            borderRadius:DOT_SIZE,
        },
        bottomSheetContainer:{padding:20},
        bottomSheet:{backgroundColor:'whie'}
    }
)




const data={
    "brand": "Nike SB",
    "countInStock": 20,
    "description": "The Nike SB Hoodie is a soft skate essential, with an embroidered logo inspired by late-90s and early-2000s fonts.",
    "images": [
        "https://images.unsplash.com/photo-1554967769-1f961137e9c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGhvb2RpZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        "https://images.unsplash.com/photo-1617171594207-430a01a9da3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
    ],
    "name": "Hoodie",
    "price": 50
}