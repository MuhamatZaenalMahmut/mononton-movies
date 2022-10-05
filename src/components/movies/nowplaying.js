import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { PlaceholderPopular, Label } from '@components';
import { StC, Font } from "@styles";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';
import { image_uri } from '@constants/BASE_URL';
import moviesUtils from '@utils/MoviesUtils';

function MoviesNowPlaying({ movies, navigation }) {

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        moviesUtils.now_playing();
        
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
            <Label label={'Now Playing Movies'} all/>
            {isLoading ? 
                <PlaceholderPopular/>
                : <FlatList
                    data={movies.popular?.results}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={(({ item, index }) => (
                        <TouchableOpacity onPress={()=> getDetail(item.id)} style={[styles.card, index == 0 && {marginLeft: RFValue(15)}]}>
                            <Image source={{uri: image_uri + item.poster_path}} style={styles.cover}/>
                            <View style={{flex:1, paddingLeft: RFValue(10)}}>
                                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                                <Text style={styles.desc} numberOfLines={4}>{item.overview}</Text>
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
  
export default connect(mapStateToProps)(MoviesNowPlaying);

const styles = StyleSheet.create({
    content:{
        marginTop: RFValue(10),
        marginBottom: RFValue(15)
    },
    card:{
        ... StC.flexR,
        marginRight: RFValue(10),
        width: RFValue(250)
    },
    cover:{
        width: RFValue(100),
        height: RFValue(80),
        marginBottom: RFValue(10),
        borderRadius: RFValue(10)
    },
    title:{
        ... Font.WHITE,
        ... Font.Medium,
        ... Font.F13
    },
    desc:{
        ... Font.GRAY,
        ... Font.Regular,
        ... Font.F12,
        ... StC.mt3
    },
})
