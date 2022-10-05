import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { PlaceholderTopRated, Label } from '@components';
import { StC, Font, Colors } from "@styles";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';
import { image_uri } from '@constants/BASE_URL';
import moviesUtils from '@utils/MoviesUtils';

function MoviesTopRated({ movies, navigation, title }) {

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        moviesUtils.top_rated();
        
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
            <Label label={title ? title : 'Top Rated Movies'}/>
            {isLoading ? 
                <PlaceholderTopRated/>
                : <FlatList
                    data={movies.top_rated?.results}
                    numColumns={3}
                    renderItem={(({ item, index }) => (
                        <TouchableOpacity onPress={()=> getDetail(item.id)} style={styles.card}>
                            <Image source={{uri: image_uri + item.poster_path}} style={styles.cover}/>
                            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
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
  
export default connect(mapStateToProps)(MoviesTopRated);

const styles = StyleSheet.create({
    content:{
        marginVertical: RFValue(10),
    },
    card:{
        flex:1,
        marginHorizontal: RFValue(5),
        marginBottom: RFValue(15),
    },
    cover:{
        width:'100%',
        height: RFValue(150),
        borderRadius: RFValue(5),
    },
    title:{
        ... Font.GRAY,
        ... Font.Medium,
        ... Font.F12,
        ... StC.mt3
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
