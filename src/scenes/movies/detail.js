import React from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import { Icon } from 'native-base';
import { BaseContainer, AppBar, ButtonFlex, Rating, MoviesPopular, MoviesTopRated } from '@components';
import { StC, Font, Colors } from "@styles";
import { Icons } from "@assets";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';
import { image_uri } from '@constants/BASE_URL';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';

function MoviesDetail({ movies, navigation }) {

    let detail = movies.detail

    return (
        <BaseContainer>
            <AppBar navigation={navigation} full/>
            <ScrollView>
                <View>
                    <Image source={{uri: image_uri + detail.backdrop_path}} style={styles.image}/>
                    <Image source={Icons.shadow} style={styles.shadow}/>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}><Text style={Font.Medium}>{detail.title}</Text> ({moment(detail.release_date).format('YYYY')})</Text>
                    <View style={[StC.flexR, StC.mb10]}>
                        <Text style={Font.desc}>
                            {detail.genres.map((val, index) => {
                                return index == detail.genres.length - 1 ? val.name : val.name + ', '
                            })}  
                        </Text>
                        <Icon as={Entypo} name={'dot-single'} color={Colors.GRAY} size={RFValue(4)} style={{marginRight: RFValue(3)}}/>
                        <Text style={Font.desc}>{parseInt(detail.runtime / 60)}h {detail.runtime % 60}m</Text>
                    </View>
                    <Rating rating={4}/>
                    <View style={[StC.flexR, {marginHorizontal: RFValue(-10)}]}>
                        <ButtonFlex title={'Play'} icon="play"/>
                        <ButtonFlex title={'My List'} icon="plus" secondary/>
                    </View>
                    <Text style={styles.desc}>{detail.overview}</Text>
                </View>
                <MoviesPopular navigation={navigation}/>
                <MoviesTopRated navigation={navigation}/>
            </ScrollView>
        </BaseContainer>
    )
}

const mapStateToProps = function (state) {
    const { movies } = state;
    return { movies }
}
  
export default connect(mapStateToProps)(MoviesDetail);

const styles = StyleSheet.create({
    content:{
        padding: RFValue(15),
        marginTop: RFValue(-120)
    },
    title:{
        ... Font.WHITE,
        ... Font.F15,
        ... Font.Regular
    },
    desc:{
        ... Font.GRAY,
        ... Font.F13,
        ... Font.Regular,
        ... StC.mt5
    },
    image:{
        width:'100%',
        height: RFValue(430)
    },
    shadow:{
        position:'absolute',
        bottom:0,
        width:'100%',
        height: RFValue(180),
    }
})