import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { Font, StC, Colors } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { MyView } from "@components";
import { Icons } from "@assets";

const FormPicker = ({
    hide,
    label,
    value,
    placeholder,
    onPress,
    disabled,
    date
}) => {
    return (

    <MyView style={styles.cardInput} hide={hide}>
        {label ? <Text style={Font.label}>{label}</Text> : null}
        <TouchableOpacity style={[styles.borderPicker, disabled && {backgroundColor: Colors.WHITE_DARK}]} onPress={disabled ? null : onPress} activeOpacity={0.9}>
            <Text style={[Font.value, {flex:1}]}>{value ? value : placeholder}</Text>
            <Image source={date ? Icons.calendar : Icons.arrow} style={styles.icon}/>
        </TouchableOpacity>
    </MyView>
    )
}

export default FormPicker;

const styles = ({
    cardInput:{
        ... StC.mb15,
        flex: 1,
    },
    borderPicker:{
        ... StC.flexR,
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        height: RFValue(45),
        paddingVertical: RFValue(10),
        paddingHorizontal: RFValue(10),
        borderColor: '#E1E1E1',
        alignItems: 'center',
    },
    icon:{
        width: RFValue(20),
        height: RFValue(20)
    }
})
