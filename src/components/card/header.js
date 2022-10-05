import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { StC, Font, Colors } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { connect } from "react-redux";
import { currencyFloat } from '@constants';

function CardHeader({ data }) {
    let detail = data.detail

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={[Font.label, Font.WHITE]}>{detail.name}</Text>
            </View>
            <View style={{padding: RFValue(15)}}>
                <Text style={Font.desc}>Budget yang di alokasikan</Text>
                <Text style={[styles.value, StC.mb10]}>{currencyFloat(detail.allocation)}</Text>
                <Text style={Font.desc}>Budget yang terpakai</Text>
                <Text style={[styles.value, Font.GREEN]}>{currencyFloat(detail.used)}</Text>
            </View>
        </View>
    )
}

const mapStateToProps = function (state) {
    const { data } = state;
    return { data }
}
  
export default connect(mapStateToProps)(CardHeader);


const styles = StyleSheet.create({
    card:{
        backgroundColor: Colors.WHITE,
        borderRadius: RFValue(15),
        margin: RFValue(15),
    },
    header:{
        ... StC.centerPage,
        backgroundColor: Colors.BLUE_SKY,
        borderTopLeftRadius: RFValue(15),
        borderTopRightRadius: RFValue(15),
        padding: RFValue(10)
    },
    value:{
        ... Font.F24,
        ... Font.Bold
    }
})
