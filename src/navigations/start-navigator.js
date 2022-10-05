import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Splashscreen } from "@scenes";

const Stack = createStackNavigator();

const AppNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Splashscreen" component={Splashscreen} options={{ headerShown: false }}/>
            {/* <Stack.Screen name="DetailTransaction" component={DetailTransaction} options={{ headerShown: false }}/> */}
        </Stack.Navigator>
    );
};

export default AppNavigator;