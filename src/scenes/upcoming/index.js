import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { BaseContainer } from '@components';
import { StC } from "@styles";
import { Icons } from "@assets";
import { connect } from "react-redux";

function Upcoming({}) {
    return (
        <BaseContainer>
            <View style={styles.content}>
                <Text>67890</Text>
            </View> 
        </BaseContainer>
    )
}

const mapStateToProps = function (state) {
    const { weather } = state;
    return { weather }
}
  
export default connect(mapStateToProps)(Upcoming);

const styles = StyleSheet.create({
    content:{
        ... StC.centerPage,
        width: '100%',
        height: '100%',
    }
})