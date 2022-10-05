import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Icon } from 'native-base';
import { StC, Colors } from "@styles";
import { Icons } from "@assets";
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Header() {

    return (
        <View style={styles.header}>
            <Image source={Icons.logo_land} style={styles.logo}/>
            <View style={{flex:1}}/>
            <Icon as={Ionicons} name={'search'} color={Colors.WHITE} size={RFValue(5)} style={{width: RFValue(30)}}/>
            <Icon as={Ionicons} name={'notifications-outline'} color={Colors.WHITE} size={RFValue(5)} style={{width: RFValue(30)}}/>
        </View> 
    )
}

export default Header;

const styles = StyleSheet.create({
    header:{
        ... StC.flexR,
        backgroundColor: Colors.BLACK,
        height: RFValue(50),
        alignItems: 'center',
        paddingHorizontal: RFValue(10),
    },
    logo:{
        width: RFValue(130),
        height: RFValue(40),
        resizeMode:'contain'
    }
})
