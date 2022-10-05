import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";

function PlaceholderTopRated() {

    return (
        <View style={styles.placeholder}>
            <FlatList
                data={[0, 1, 2, 4, 5, 6]}
                numColumns={3}
                renderItem={(({ item, index }) => (
                    <ShimmerPlaceHolder
                        key={index}
                        LinearGradient={LinearGradient}
                        style={{
                            borderRadius: RFValue(10),
                            flex: 1,
                            height: RFValue(150),
                            marginHorizontal: RFValue(5),
                            marginBottom: RFValue(10)
                        }}
                    />
                ))}
            />
        </View>
    )
}

export default PlaceholderTopRated;


const styles = StyleSheet.create({
    placeholder:{
        marginBottom: RFValue(5), 
        paddingHorizontal: RFValue(15)
    },
})
