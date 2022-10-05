import React, { useRef, useState } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { Icon, Button } from 'native-base'
import { Font, StC } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { boarding } from "./boarding.js";
import { IsOnBoarding } from '@actions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ViewPager from '@react-native-community/viewpager';
import store from "@stores/store";

const Page = ({item}) => (
    <View style={{width:'100%'}}>
        <Image
            resizeMode="stretch"
            style={StC.wh100}
            source={item.image}/>
    </View>
)

const Splashscreen = ({ navigation }) => {
    const [page, setPage] = useState(0)
    const pageRef = useRef(null);

    const handlePageChange = (pageNumber) => {
        if(pageNumber == 3){
            onFinished()
        } else {
            pageRef.current.setPage(pageNumber)
        }
    }

    onFinished = async () => {
        store.dispatch(IsOnBoarding())
        navigation.navigate('dashboard')
    }

    return (      
        <>
            <View>
                <Text>65789</Text>
            </View>
            {/* <ViewPager
                style={{ flex: 1}}
                initialPage={page}
                ref={pageRef}
                onPageSelected={(event) => setPage(event.nativeEvent.position)}
            >
                {boarding.map((item, index) => (
                    <Page
                        item={item}
                    />
                ))}
            </ViewPager>
            <View style={styles.footer}>
                <Button size="sm" style={styles.btnSkip} _text={styles.labelBtn} onPress={()=> onFinished()}>Lewati</Button>
                <Button size="sm" style={styles.btnNext} _text={styles.labelBtn}  onPress={() => handlePageChange( page + 1 )} leftIcon={<Icon as={AntDesign} color={Font.BLACK} name="right" size="sm" />}></Button>
            </View> */}
        </>  
    )
}

export default Splashscreen;

const styles = StyleSheet.create({
    footer:{
        ... StC.flexR,
        position:'absolute',
        width:'100%',
        paddingHorizontal: RFValue(30),
        bottom: RFValue(40),
    },
    btnSkip:{
        backgroundColor:'white',
        borderRadius: RFValue(20),
        width: RFValue(70),
    },
    btnNext:{
        position:'absolute',
        backgroundColor:'white',
        borderRadius: RFValue(20),
        width: RFValue(35),
        height: RFValue(35),
        right: RFValue(30)
    },
    labelBtn:{
        ... Font.Medium,
        ... Font.F12,
        ... Font.BLACK
    }
})
