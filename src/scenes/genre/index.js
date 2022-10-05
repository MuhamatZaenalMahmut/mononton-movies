import React, { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { BaseContainer, Header, MoviesPopular, MoviesPerson, MoviesUpcoming, MoviesTopRated, MoviesNowPlaying, Menu } from '@components';
import { StC, Colors } from "@styles";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';

function Genre({ movies }) {


    return (
        <BaseContainer>
            <Header/>
            <ScrollView>
                <MoviesPopular/>
                <Menu/>
                <MoviesNowPlaying/>
                <MoviesPerson/>
                <MoviesUpcoming/>
                <MoviesTopRated/>
            </ScrollView>
        </BaseContainer>
    )
}

const mapStateToProps = function (state) {
    const { movies } = state;
    return { movies }
}
  
export default connect(mapStateToProps)(Genre);

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