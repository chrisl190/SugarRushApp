import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUp';
import SignUpReviewBefore from '../screens/SignUpReviewBefore';
import SignUpReviewAfter from '../screens/SignUpReviewAfter';
import SignUpScreenPassword from '../screens/SignUpPassword';
import LandingScreen from '../screens/Landing';
import WorkExperienceItem from '../screens/WorkExperienceItem';
import WorkExperienceView from '../screens/WorkExperienceView';
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
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{title: 'Details'}}
      />
      <Stack.Screen
        name="SignUpPassword"
        component={SignUpScreenPassword}
        options={{title: 'Password'}}
      />
      <Stack.Screen
        name="ExperienceWork"
        component={WorkExperienceView}
        options={{title: 'Work Experience'}}
      />
      <Stack.Screen
        name="ExperienceWorkItem"
        component={WorkExperienceItem}
        options={{title: 'Add Work Experience'}}
      />
      <Stack.Screen
        name="ExperienceIndustries"
        component={Industries}
        options={{title: 'Industries'}}
      />
      <Stack.Screen
        name="SignUpReviewBefore"
        component={SignUpReviewBefore}
        options={{title: 'Review'}}
      />
      <Stack.Screen
        name="SignUpReviewAfter"
        component={SignUpReviewAfter}
        options={{title: 'Submit'}}
      />
    </Stack.Navigator>
  );
};

export default StackSignup;
