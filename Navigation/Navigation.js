import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from "../screens/Dashboard";
import CoinDetails from "../screens/CoinDetails";


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false , animation: 'none'}}>
            <Stack.Screen name="Dashboard" component={Dashboard}/>
            <Stack.Screen name="CoinDetails" component={CoinDetails}/>
        </Stack.Navigator>
    )
}

export default Navigation