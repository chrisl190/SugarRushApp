import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#3B71F3',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CustomButton;
