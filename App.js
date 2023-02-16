import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Toast from 'react-native-toast-message';
import {AuthenticatedProvider} from './src/hooks/authenticatedContext';
import {useAuthenticatedContext} from './src/hooks/authenticatedContext';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './src/navigation/LoginStack';
import StackSignup from './src/navigation/StackSignup';

const App = () => {
  const [authenticated, setAuthenticated] = useAuthenticatedContext();
  return (
      <SafeAreaView style={styles.root}>
        <NavigationContainer>
          { <StackSignup/>}
        </NavigationContainer>
        <Toast />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;