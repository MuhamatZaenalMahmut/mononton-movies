import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Font, StC } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonFlex = ({
    disabled,
    onPress,
    style,
    title,
    hide,
    icon,
    secondary
}) => {
    return (
        !hide &&
            <TouchableOpacity 
                activeOpacity={0.5} 
                onPress={disabled ? null : onPress} 
                style={[styles.btn, style, secondary && {backgroundColor: Colors.WHITE}]}
            >
                <Icon as={MaterialCommunityIcons} name={icon} color={secondary ? Font.BLACK: Colors.WHITE} size={RFValue(4)} style={{marginRight: RFValue(3)}}/>
                <Text style={[styles.label, secondary && Font.BLACK]}>{title}</Text>
            </TouchableOpacity>
    )
}

export default ButtonFlex

const styles = StyleSheet.create({
    btn:{
        ... StC.flexR,
        ... StC.centerPage,
        marginHorizontal: RFValue(10),
        borderRadius: RFValue(5),
        marginVertical: RFValue(10),
        height: RFValue(35),
        backgroundColor: Colors.PRIMARY,
        flex:1
    },
    label:{
        ... Font.WHITE,
        ... Font.F14,
        ... Font.Medium
    },
});
