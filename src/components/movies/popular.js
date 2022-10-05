import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { PlaceholderPopular, Label } from '@components';
import { StC, Colors, Font } from "@styles";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';
import { image_uri } from '@constants/BASE_URL';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moviesUtils from '@utils/MoviesUtils';

function MoviesPopular({ movies, navigation }) {

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        moviesUtils.popular();
        
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])


    const getDetail = async (id) => {
        await moviesUtils.detail(id)
        navigation.navigate('MoviesDetail')
    }

    return (
        <View style={styles.content}>
            <Label label={'Popular Movies'} all/>
            {isLoading ? 
                <PlaceholderPopular/>
                : <FlatList
                    data={movies.popular?.results}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={(({ item, index }) => (
                        <TouchableOpacity onPress={()=> getDetail(item.id)} style={[styles.card, index == 0 && {marginLeft: RFValue(15)}]}>
                            <Image source={{uri: image_uri + item.poster_path}} style={styles.cover}/>
                            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                            <View style={styles.view}>
                                <Icon as={MaterialCommunityIcons} name={'eye'} color={Colors.PRIMARY} size={RFValue(4)} style={{marginRight: RFValue(3)}}/>
                                <Text style={styles.txtView}>{item.popularity}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                />
            }
        </View>
    )
}

const mapStateToProps = function (state) {
    const { movies } = state;
    return { movies }
}
  
export default connect(mapStateToProps)(MoviesPopular);

const styles = StyleSheet.create({
    content:{
        marginTop: RFValue(10),
        marginBottom: RFValue(15)
    },
    card:{
        marginRight: RFValue(10),
    },
    cover:{
        width: RFValue(130),
        height: RFValue(200),
        marginBottom: RFValue(10),
        borderRadius: RFValue(15)
    },
    title:{
        ... Font.WHITE,
        ... Font.Medium,
        ... Font.F13
    },
    view:{
        ... StC.flexR,
        alignItems: 'center',
    },
    txtView:{
        ... Font.PRIMARY,
        ... Font.Regular,
        ... Font.F12
    },
})
