import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StC, Font } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';

function Label({ label, all }) {

    return (
        <View style={styles.card}>
            <Text style={styles.header}>{label}</Text>
            {all ? <Text style={styles.all}>View All</Text> : null}
        </View>
    )
}

export default Label;

const styles = StyleSheet.create({
    card:{
        ... StC.flexR,
        marginHorizontal: RFValue(15),
        marginBottom: RFValue(10),
        alignItems: 'center',
    },
    header:{
        ... Font.title,
        flex:1,
    },
    all:{
        ... Font.GRAY,
        ... Font.Medium,
        ... Font.F13
    }
})
