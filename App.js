import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import StackSignup from './src/navigation/StackSignup';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackSignup />
      </NavigationContainer>
      <Toast />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
