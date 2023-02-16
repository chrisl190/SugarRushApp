import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  createStackNavigator,
} from '@react-navigation/native-stack';
import SignInScreen from '../screens/Landing';
import SignUpScreen from '../screens/SignUp';
import SignUpScreenPassword from '../screens/SignUpPassword';
import BottomTab from './bottomTab';
import LandingScreen from '../screens/Landing';
import WorkExperienceView from '../screens/WorkExperienceView';
import {useAuthenticatedContext} from '../hooks/authenticatedContext';

const Stack = createNativeStackNavigator();

function LoginStack() {
  
  return (
      <Stack.Navigator
        screenOptions={{
          detachPreviousScreen: false,
        }}>
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignUpPassword" component={SignUpScreenPassword} />
        <Stack.Screen name='Profile' component={LandingScreen} />
      </Stack.Navigator>
  );
}

export default LoginStack;
