import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import AppNavigator from "./app-navigator";
import StartNavigator from "./start-navigator";

const Stack = createStackNavigator();

const RootNavigator = ({ auth }) => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="App" component={AppNavigator}/>
                {/* {auth.isAuthScreen ? */}
                        {/* <Stack.Screen name="Start" component={StartNavigator}/> */}
                    {/* :
                        <Stack.Screen name="App" component={AppNavigator}/>
                } */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const mapStateToProps = function (state) {
    const { auth } = state;
    return { auth }
}

export default connect(mapStateToProps)(RootNavigator);