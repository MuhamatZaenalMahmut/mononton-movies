import React, { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { BaseContainer, HeaderSearch, MoviesPopular, MoviesUpcoming, MoviesTopRated } from '@components';
import { StC, Colors } from "@styles";
import { connect } from "react-redux";
import { RFValue } from 'react-native-responsive-fontsize';

function Search({ movies }) {


    return (
        <BaseContainer>
            <HeaderSearch title="Search"/>
            <ScrollView>
                <MoviesPopular/>
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
  
export default connect(mapStateToProps)(Search);

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