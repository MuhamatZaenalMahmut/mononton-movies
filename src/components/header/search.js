import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'native-base';
import { StC, Colors, Font } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HeaderSearch({ title }) {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <View style={{flex:1}}/>
            <Icon as={Ionicons} name={'search'} color={Colors.WHITE} size={RFValue(5)}/>
        </View> 
    )
}

export default HeaderSearch;

const styles = StyleSheet.create({
    header:{
        ... StC.flexR,
        backgroundColor: Colors.BLACK,
        height: RFValue(50),
        alignItems: 'center',
        paddingHorizontal: RFValue(15),
    },
    title:{
        ... Font.F15,
        ... Font.WHITE,
        ... Font.Medium
    },
    logo:{
        width: RFValue(130),
        height: RFValue(40),
        resizeMode:'contain'
    }
})
