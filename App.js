import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/homeScreen";
import SignUpScreen from "./screens/signUpScreen";
import ContatosScreen from "./screens/contatosScreen"
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen}/>
                <Stack.Screen name="Contatos" component={ContatosScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


