import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import Toast from 'react-native-toast-message';

const SignUpReviewBefore = ({ navigation }) => {
    const onPress = () => {
        // API request right here, has to be successful before navigating.
        navigation.navigate('SignUpReviewAfter');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <CustomButton text="Submit" onPress={onPress} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  checkbox: {
    paddingLeft: 20,
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUpReviewBefore;