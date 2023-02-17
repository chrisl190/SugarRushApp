import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import Toast from 'react-native-toast-message';
import { API, Selector, useAppSelector } from '../state';

const SignUpReviewBefore = ({ navigation }) => {
    const stateUserSignup = useAppSelector(Selector.UserSignup);
    const [userSignup, { data, isLoading }] = API.useUserSignupMutation();

    const onPressFailure = (error) => {
      console.log('failure');
      console.log(error.status);
      console.log(error.data);
      //console.log(error);
    }

    const onPressSuccess = (response) => {
      console.log('successful');
      const userToken = response.data.user_token;
      console.log({ userToken });
      //console.log(response);
      navigation.navigate('SignUpReviewAfter');
    }

    const onPress = () => {
      //const request = stateUserSignup;
      console.log(request);
      const request = {
        "first_name": "Jason",
        "last_name": "Sweeney",
        "date_of_birth": "07/01/2003",
        "email": "jason.s@sugarrushcreative.com",
        "address_1": "Sugar Rush Creative",
        "address_2": "7 Cromac Ave",
        "county": "Antrim",
        "country": "GB",
        "postcode": "BT7 2JA",
        "password": "SomethingHere65&",
        "password_confirmation": "SomethingHere65&",
        "terms_and_conditions": true,
        "industries": [1, 2, 3],
        "experiences": [
          {
            "start_date": "05/12/2016",
            "end_date": "19/02/2020",
            "role": "Developer",
            "description": "Some Description"
          },
          {
            "start_date": "04/12/2011",
            "end_date": "04/12/2016",
            "role": "Front-end",
            "description": "Another Description"
          }
        ]
      };
      userSignup(request).unwrap().then(onPressSuccess).catch(onPressFailure);
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                { !isLoading && <CustomButton text="Submit" onPress={onPress} /> }
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