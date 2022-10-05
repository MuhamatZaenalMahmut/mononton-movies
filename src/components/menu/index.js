import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { StC, Colors, Font } from "@styles";
import { Icons } from "@assets";
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Menu({ navigation }) {

    let arr = [
        {
            title: 'Genre',
            icon: 'appstore1',
            type: AntDesign,
            menu: 'Search'
        },
        {
            title: 'TV Show',
            icon: 'md-videocam',
            type: Ionicons,
            menu: 'TV'
        },
        {
            title: 'My List',
            icon: 'video-collection',
            type: MaterialIcons,
            menu: 'Collections'
        }
    ]

    return (
        <View style={styles.content}>
            <FlatList
                data={arr}
                numColumns={3}
                renderItem={(({ item, index }) => (
                    <TouchableOpacity onPress={()=> navigation.navigate(item.menu)} style={styles.card}>
                        <View style={styles.icon}>
                            <Icon as={item.type} name={item.icon} color={Colors.GRAY} size={RFValue(6)}/>
                        </View>
                        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            />
        </View> 
    )
}

export default Menu;

const styles = StyleSheet.create({
    content:{
        alignItems: 'center',
        paddingHorizontal: RFValue(10),
        marginVertical: RFValue(10)
    },
    title:{
        ... Font.GRAY,
        ... Font.Medium,
        ... Font.F12,
        ... StC.mt3
    },
    card:{
        ... StC.centerPage,
        width: RFValue(80),
        height: RFValue(90),
        borderRadius: RFValue(10),
        backgroundColor: Colors.BLACK,
        marginHorizontal: RFValue(10),
    },
    icon:{
        ... StC.centerPage,
        width: RFValue(40),
        height: RFValue(40),
        borderRadius: RFValue(10),
        backgroundColor: '#252638',
    }
})
