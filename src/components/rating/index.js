import React from "react";
import { View, Text } from "react-native";
import { Icon } from 'native-base';
import { Colors, StC, Font } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { MyView } from "@components";
import Entypo from 'react-native-vector-icons/Entypo';

let arr = [1,2,3,4,5]

const Rating = (props) => (
    <View>
        <View style={StC.flexR}>
            {arr.map(item => (
                <Icon as={Entypo} name={'star'} color={props.rating < item ? Colors.GRAY : '#F1AF38'} size={RFValue(6)}/>
            ))}
        </View>
        <MyView style={styles.cardRating} hide={props.detail}>
            <Text style={[styles.label, Font.F10]}>Ratings</Text>
        </MyView>
    </View>
    
)

export default Rating

const styles =({
    cardRating:{
        ... StC.flexR, 
        ... StC.mT5,
        alignItems: 'center',
    },
    label:{
        ... Font.F9,
        ... Font.BLACK_SOFT,
        ... Font.Regular
    }
})