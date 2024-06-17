
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/SplashScreen';
import OnboardingScreen1 from './src/OnboardingScreen1';
import OnboardingScreen2 from './src/OnboardingScreen2';
import OnboardingScreen3 from './src/OnboardingScreen3';
import WelcomeScreen from './src/WelcomeScreen';
import SignInScreen from './src/SignInScreen';
import HomeScreen from './src/HomeScreen';
import SignUpScreen from './src/SignUpScreen';
import LocationScreen from './src/LocationScreen';
import NotificationScreen from './src/NotificationScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} options={{ headerShown: false }}/>
        <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} options={{ headerShown: false }}/>
        <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} options={{ headerShown: false }}/>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="LocationScreen" component={LocationScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
