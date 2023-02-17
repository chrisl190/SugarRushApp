import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  createStackNavigator,
} from '@react-navigation/native-stack';
import SignInScreen from '../screens/Landing';
import SignUpScreen from '../screens/SignUp';
import SignUpReviewBefore from '../screens/SignUpReviewBefore';
import SignUpReviewAfter from '../screens/SignUpReviewAfter';
import SignUpScreenPassword from '../screens/SignUpPassword';
import BottomTab from './bottomTab';
import LandingScreen from '../screens/Landing';
import WorkExperienceItem from '../screens/WorkExperienceItem';
import WorkExperienceView from '../screens/WorkExperienceView';
import {useAuthenticatedContext} from '../hooks/authenticatedContext';
import Industries from '../screens/Industries';

const Stack = createNativeStackNavigator();

export const StackSignup = () => {
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
        <Stack.Screen
          name="ExperienceWork"
          component={WorkExperienceView}
          options={{title: 'Work Experience'}}
        />
        <Stack.Screen name="ExperienceWorkItem" component={WorkExperienceItem} />
        <Stack.Screen name="ExperienceIndustries" component={Industries} />
        <Stack.Screen name="SignUpReviewBefore" component={SignUpReviewBefore} />
        <Stack.Screen name="SignUpReviewAfter" component={SignUpReviewAfter} />
        <Stack.Screen name='Profile' component={LandingScreen} />
      </Stack.Navigator>
  );
}

export default StackSignup;