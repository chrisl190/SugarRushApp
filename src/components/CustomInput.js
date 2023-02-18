import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  maxLength,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 7,
  },
});

export default CustomInput;
