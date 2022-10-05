import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StC } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";

function PlaceholderUpcoming() {

    return (
        <View style={styles.placeholder}>
            {[0, 1, 2].map((item, index) => (
                <View style={[StC.flexR, {marginBottom: RFValue(15)}]}>
                    <ShimmerPlaceHolder
                        key={index}
                        LinearGradient={LinearGradient}
                        style={{
                            borderRadius: RFValue(10),
                            width: RFValue(120),
                            height: RFValue(90),
                            marginRight: RFValue(10),
                        }}
                    />
                    <View>
                        <ShimmerPlaceHolder
                            key={index}
                            LinearGradient={LinearGradient}
                            style={{
                                borderRadius: RFValue(5),
                                width: RFValue(160),
                                height: RFValue(8),
                                marginTop: RFValue(10)
                            }}
                        />
                        <ShimmerPlaceHolder
                            key={index}
                            LinearGradient={LinearGradient}
                            style={{
                                borderRadius: RFValue(5),
                                width: RFValue(130),
                                height: RFValue(8),
                                marginTop: RFValue(15),
                            }}
                        />
                        <ShimmerPlaceHolder
                            key={index}
                            LinearGradient={LinearGradient}
                            style={{
                                borderRadius: RFValue(5),
                                width: RFValue(90),
                                height: RFValue(8),
                                marginTop: RFValue(15),
                            }}
                        />
                    </View>
                </View>
            ))}
        </View>
    )
}

export default PlaceholderUpcoming;


const styles = StyleSheet.create({
    placeholder:{
        marginBottom: RFValue(5), 
        paddingHorizontal: RFValue(15)
    },
})
