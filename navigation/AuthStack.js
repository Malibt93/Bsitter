import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { GoogleSignin } from "@react-native-google-signin/google-signin"; 

import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';

import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value === null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });

        GoogleSignin.configure({
            webClientId: '594007476222-fofpfjlp3d7qroo9blp1vrn2vottk2u6.apps.googleusercontent.com',
        });

    }, []);

    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch === true) {
        routeName = 'Onboarding';
    } else {
        routeName = 'Login';
    }

    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        shadowColor: '#f9fafd',
                        elevation: 0,
                    },
                    headerLeft: () => (
                        <View style={{ marginLeft: 10 }}>
                            <FontAwesome.Button
                                name="long-arrow-left"
                                size={25}
                                backgroundColor="#f9fafd"
                                color="#333"
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>
                    ),
                })}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;