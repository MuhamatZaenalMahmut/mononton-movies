import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { Font, StC, Colors } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { MyView } from "@components";
import { Icons } from "@assets";
import CurrencyInput from 'react-native-currency-input';

const FormCounter = ({
    hide,
    label,
    value,
    placeholder,
    onPress,
    disabled,
    onChangeValue,
    prefix,
    suffix,
    delimiter,
    separator,
    precision
}) => {
    return (

    <MyView style={styles.cardInput} hide={hide}>
        {label ? <Text style={Font.label}>{label}</Text> : null}
        <TouchableOpacity style={[styles.borderPicker, disabled && {backgroundColor: Colors.WHITE_DARK}]} onPress={disabled ? null : onPress} activeOpacity={0.9}>
            <Image source={Icons.minus} style={styles.icon}/>
            <View style={{flex:1}}>
                <CurrencyInput
                    value={value}
                    onChangeValue={(val) => onChangeValue(val)}
                    prefix={prefix}
                    suffix={suffix}
                    delimiter={delimiter}
                    separator={separator}
                    precision={precision}
                    style={[Font.value, {textAlign:'center'}]}
                    keyboardType="number-pad"
                    placeholder={placeholder}
                    minValue={0}
                />
            </View>            
            <Image source={Icons.plus} style={styles.icon}/>
        </TouchableOpacity>
    </MyView>
    )
}

export default FormCounter;

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
        borderColor: '#E1E1E1',
        alignItems: 'center',
    },
    icon:{
        width: RFValue(20),
        height: RFValue(20),
        marginHorizontal: RFValue(10),
    }
})
