import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { PlaceholderPerson, Label } from '@components';
import { StC, Colors, Font } from "@styles";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';
import { image_uri } from '@constants/BASE_URL';
import personUtils from '@utils/PersonUtils';

function MoviesPerson({ person }) {

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        personUtils.popular();
        
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    return (
        <View style={styles.content}>
            <Label label={'Artis'} all/>
            {isLoading ? 
                <PlaceholderPerson/>
                : <FlatList
                    data={person.popular?.results}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={(({ item, index }) => (
                        <TouchableOpacity onPress={()=> alert(item.name)} style={[styles.card, index == 0 && {marginLeft: RFValue(15)}]}>
                            <Image source={{uri: image_uri + item.profile_path}} style={styles.cover}/>
                            <Text style={styles.title} numberOfLines={2}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                />
            }
        </View>
    )
}

const mapStateToProps = function (state) {
    const { person } = state;
    return { person }
}
  
export default connect(mapStateToProps)(MoviesPerson);

const styles = StyleSheet.create({
    content:{
        marginTop: RFValue(10),
    },
    card:{
        marginRight: RFValue(15),
        width: RFValue(60),
        height: RFValue(100),
    },
    cover:{
        width: RFValue(60),
        height: RFValue(60),
        marginBottom: RFValue(5),
        borderRadius: RFValue(30),
        borderWidth: RFValue(3),
        borderColor: Colors.PRIMARY
    },
    title:{
        ... Font.WHITE,
        ... Font.Medium,
        ... Font.F12,
        textAlign: 'center'
    },
    view:{
        ... StC.flexR,
        alignItems: 'center',
    },
})
