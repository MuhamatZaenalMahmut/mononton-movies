import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StC } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";

function PlaceholderPerson() {

    return (
        <View style={styles.placeholder}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                <View>
                    <ShimmerPlaceHolder
                        key={index}
                        LinearGradient={LinearGradient}
                        style={{
                            borderRadius: RFValue(30),
                            width: RFValue(60),
                            height: RFValue(60),
                            marginRight: RFValue(15),
                        }}
                    />
                    <ShimmerPlaceHolder
                        key={index}
                        LinearGradient={LinearGradient}
                        style={{
                            borderRadius: RFValue(5),
                            width: RFValue(40),
                            height: RFValue(10),
                            marginTop: RFValue(10),
                            marginLeft: RFValue(10),
                        }}
                    />
                </View>
            ))}
        </View>
    )
}

export default PlaceholderPerson;


const styles = StyleSheet.create({
    placeholder:{
        ... StC.flexR,
        marginBottom: RFValue(5), 
        paddingHorizontal: RFValue(15)
    },
})
