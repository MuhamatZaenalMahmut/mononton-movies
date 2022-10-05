import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { PlaceholderUpcoming, Label } from '@components';
import { StC, Font, Colors } from "@styles";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';
import { image_uri } from '@constants/BASE_URL';
import { formatDate } from '@constants';
import moviesUtils from '@utils/MoviesUtils';

function MoviesUpcoming({ movies, navigation }) {

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        moviesUtils.upcoming();

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
            <Label label={'Upcoming Movies'}/>
            {isLoading ? 
                <PlaceholderUpcoming/>
                : <FlatList
                    data={movies.upcoming?.results?.slice(0,3)}
                    renderItem={(({ item, index }) => (
                        <TouchableOpacity onPress={()=> getDetail(item.id)} style={styles.card}>
                            <Image source={{uri: image_uri + item.poster_path}} style={styles.cover}/>
                            <View style={{paddingLeft: RFValue(10), flex:1}}>
                                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                                <Text style={styles.desc} numberOfLines={3}>{item.overview}</Text>
                                <Text style={styles.date}>Release: {formatDate(item.release_date)}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                />
            }
            <View style={styles.btn}>
                <Text style={styles.all}>More</Text>
            </View>
        </View>
    )
}

const mapStateToProps = function (state) {
    const { movies } = state;
    return { movies }
}
  
export default connect(mapStateToProps)(MoviesUpcoming);

const styles = StyleSheet.create({
    content:{
        marginVertical: RFValue(10),
    },
    card:{
        ... StC.flexR,
        marginHorizontal: RFValue(15),
        marginBottom: RFValue(15),
    },
    cover:{
        width: RFValue(120),
        height: RFValue(90),
        borderRadius: RFValue(10),
    },
    title:{
        ... Font.WHITE,
        ... Font.Medium,
        ... Font.F13,
    },
    desc:{
        ... Font.GRAY,
        ... Font.Regular,
        ... Font.F12,
        ... StC.mt3
    },
    view:{
        ... StC.flexR,
        alignItems: 'center',
    },
    date:{
        ... Font.PRIMARY,
        ... Font.Regular,
        ... Font.F11,
        ... StC.mt5,
        textAlign: 'right'
    },
    btn:{
        ... StC.centerPage,
        height: RFValue(35),
        backgroundColor: Colors.BLACK,
        marginHorizontal: RFValue(10),
        borderRadius: RFValue(10)
    },
    all:{
        ... Font.GRAY,
        ... Font.Medium,
        ... Font.F12,
    }
})
