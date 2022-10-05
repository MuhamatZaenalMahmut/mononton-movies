import React, { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { BaseContainer, Header, MoviesPopular, MoviesPerson, MoviesUpcoming, MoviesTopRated, MoviesNowPlaying, Menu } from '@components';
import { StC, Colors } from "@styles";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';

function Home({ movies, navigation }) {

    return (
        <BaseContainer>
            <Header/>
            <ScrollView>
                <MoviesPopular navigation={navigation}/>
                <Menu navigation={navigation}/>
                <MoviesNowPlaying navigation={navigation}/>
                <MoviesPerson navigation={navigation}/>
                <MoviesUpcoming navigation={navigation}/>
                <MoviesTopRated navigation={navigation}/>
            </ScrollView>
        </BaseContainer>
    )
}

const mapStateToProps = function (state) {
    const { movies } = state;
    return { movies }
}
  
export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
    header:{
        ... StC.flexR,
        backgroundColor: Colors.BLACK,
        height: RFValue(50),
        alignItems: 'center',
        paddingHorizontal: RFValue(10),
    },
    logo:{
        width: RFValue(90),
        height: RFValue(50),
    }
})