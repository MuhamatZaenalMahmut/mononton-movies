import React from "react";
import { Text } from "react-native";
import { Icon } from "native-base";
import { Colors, Font } from "@styles";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import { Account, Download, Home, Search, MoviesDetail, TV, TVDetail, Genre, Collections } from "@scenes";
import Octicons from 'react-native-vector-icons/Octicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {

    return (
        <Tab.Navigator
            initialRouteName="CompanyDashboard"
            backBehavior="initialRoute"
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    paddingBottom: 10,
                    paddingTop: 10,
                    minHeight: 64,
                    borderTopWidth: 0,
                    alignItems: "center",
                    display: "flex",
                    backgroundColor: Colors.BLACK,
                },
                tabBarLabel: ({ focused }) => {
                    let title;

                    switch (route.name) {
                        case "home":
                            title = 'Home';
                            break;
                        case "search":
                            title = 'Search';
                            break;
                        case "download":
                            title = 'Download';
                            break;  
                        case "account":
                            title = 'Account';
                            break;  
                    }

                    return <Text style={[Font.F10, Font.Medium, focused ? Font.PRIMARY : Font.WHITE]}>{title}</Text>;
                },
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    switch (route.name) {
                        case "home":
                            iconName = 'home';
                            break;
                        case "search":
                            iconName = 'search';
                            break;
                        case "download":
                            iconName = 'download';
                            break;
                        case "account":
                            iconName = 'person';
                            break;
                    }

                    return <Icon as={Octicons} name={iconName} color={focused ? Colors.PRIMARY : Colors.WHITE} size={RFValue(5)}/>;
            },
        })}>
            <Tab.Screen name="home" component={Home} options={{headerShown: false}}/>
            <Tab.Screen name="search" component={Search} options={{headerShown: false}}/>
            <Tab.Screen name="download" component={Download} options={{headerShown: false}}/>
            <Tab.Screen name="account" component={Account} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
};

const AppNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="MainTabs" component={MainTabs} options={{headerShown: false}}/>
            <Stack.Screen name="MoviesDetail" component={MoviesDetail} options={{headerShown: false}}/>
            <Stack.Screen name="TV" component={TV} options={{headerShown: false}}/>
            <Stack.Screen name="TVDetail" component={TVDetail} options={{headerShown: false}}/>
            <Stack.Screen name="Genre" component={Genre} options={{headerShown: false}}/>
            <Stack.Screen name="Collections" component={Collections} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default AppNavigator;