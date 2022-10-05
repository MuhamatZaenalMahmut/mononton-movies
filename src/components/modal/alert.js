import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { Font, StC } from '@styles';
import { ButtonFlex } from '@components';
import { Icons } from '@assets';
import { RFValue } from 'react-native-responsive-fontsize';
import { connect } from "react-redux";
import RBSheet from "react-native-raw-bottom-sheet";

function ModalAlert ({ 
    open, 
    onPress, 
}) {

    return (
        <RBSheet
            ref={open}
            height={RFValue(250)}
            openDuration={250}
            customStyles={{
                container: {
                    ... StC.modal
                }
            }}
        >
            <View style={styles.modal}>
                <View style={styles.card}>
                    <Image source={Icons.success} style={styles.icon}/>
                    <Text style={[Font.title, StC.mb10]}>Success</Text>
                    <Text style={Font.value}>Your transaction has been saved.</Text>
                </View>
                <ButtonFlex title="Continue" onPress={onPress}/>
            </View>
        </RBSheet>
    )
}

const mapStateToProps = function (state) {
        const { data  } = state;
        return { data }
    }
  
export default connect(mapStateToProps)(ModalAlert);

const styles = StyleSheet.create({
    modal:{
        ... StC.wh100,
    },
    card:{
        padding: RFValue(15)
    },
    icon:{
        width: RFValue(90),
        height: RFValue(90),
    }
})