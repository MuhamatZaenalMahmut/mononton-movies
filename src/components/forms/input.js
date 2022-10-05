import React from "react";
import { Text, View } from "react-native";
import { Input } from "native-base";
import { Font, StC, Colors } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { MyView } from "@components";

const FormInput = ({
    hide,
    label,
    value,
    onChangeText,
    placeholder,
    keyboardType,
    isReadOnly,
    isError,
    errorMessage,
}) => {
    return (

    <MyView style={styles.cardInput} hide={hide}>
        {label ? <Text style={Font.label}>{label}</Text> : null}
        <View style={[styles.borderPicker, {borderColor: isError ? Colors.SECONDARY : '#E1E1E1'}]}>
            <Input 
                variant="unstyled"
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={Font.value}
                isReadOnly={isReadOnly}
                keyboardType={keyboardType}
                isInvalid={isError}
                size="xs"
            />
        </View>
        {isError ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
    </MyView>
    )
}

export default FormInput;

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
        alignItems: 'center',
    },
    errorText:{
        ... Font.SECONDARY,
        ... Font.F11,
        ... StC.mt3
    }
})
