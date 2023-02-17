import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import WorkIcon from 'react-native-vector-icons/MaterialIcons';
import SignUpScreen from '../screens/SignUpPassword';
import LandingScreen from '../screens/Landing';
import WorkExperienceItem from '../screens/WorkExperienceItem';
import Industries from '../screens/Industries';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen 
                    name='WorkExperience'
                    component={WorkExperienceItem} 
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <WorkIcon name="work" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='Industries'
                    component={Industries} 
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="industry" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='Profile' 
                    component={LandingScreen}
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="user" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize:20,
    },
});

export default BottomTab;