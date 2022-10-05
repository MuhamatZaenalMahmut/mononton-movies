import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { BaseContainer } from '@components';
import { StC, Font, Colors } from "@styles";
import { connect } from "react-redux";
import { menu } from "./menu.js";
import { RFValue } from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Account({ navigation }) {

    const getDetail = async (menu) => {
        navigation.navigate(menu)
    }
    
    return (
        <BaseContainer>
            <View style={styles.header}>
                <Icon as={MaterialCommunityIcons} name={'account-circle'} color={Colors.WHITE} size={RFValue(10)} style={{marginRight: RFValue(10)}}/>
                <Text style={styles.login}>Login/Signup ></Text>
            </View>
            <FlatList
                data={menu}
                renderItem={(({ item }) => (
                    <TouchableOpacity onPress={()=> getDetail(item.menu)} style={styles.card}>
                        <Icon as={item.type} name={item.icon} color={Colors.GRAY} size={RFValue(5)} style={{width: RFValue(30)}}/>
                        <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            />
        </BaseContainer>
    )
}

const mapStateToProps = function (state) {
    const { movies } = state;
    return { movies }
}
  
export default connect(mapStateToProps)(Account);

const styles = StyleSheet.create({
    header:{
        ... StC.flexR,
        paddingHorizontal: RFValue(15),
        paddingVertical: RFValue(20),
        backgroundColor: Colors.BLACK,
        alignItems: 'center',
    },
    login:{
        ... Font.WHITE,
        ... Font.F14,
        ... Font.Medium
    },
    card:{
        ... StC.flexR,
        height: RFValue(50),
        marginHorizontal: RFValue(15),
        alignItems: 'center',
    },
    title:{
        ... Font.WHITE,
        ... Font.F13,
        ... Font.Medium
    }
})