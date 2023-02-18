import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import Toast from 'react-native-toast-message';
import {API, Selector, useAppSelector} from '../state';
import { useAuthenticatedContext } from '../hooks/authenticatedContext';

const SignUpReviewBefore = ({navigation}) => {
  const stateUserSignup = useAppSelector(Selector.UserSignup);
  const [userSignup, {data, isLoading, isSuccess}] = API.useUserSignupMutation();
  const [authenticated, setAuthenticated] = useAuthenticatedContext();

  const onPressFailure = error => {
    Toast.show({
      type: 'error',
      text1: 'Error!',
      text2: 'Unable to register successfully',
      position: 'bottom',
    });
    console.log(error.status);
    console.log(error.data);
  };

  const onPressSuccess = response => {
    const userToken = response.data.user_token;
    const message = response.data.message;
    console.log({userToken});
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: message,
      position: 'bottom',
    });
    navigation.navigate('SignUpReviewAfter', { key: userToken });
  };

  const onPress = () => {
    //const request = stateUserSignup;
    //console.log(stateUserSignup);
    const request = {
      first_name: 'Jason',
      last_name: 'Sweeney',
      date_of_birth: '07/01/2003',
      email: 'jason.s@sugarrushcreative.com',
      address_1: 'Sugar Rush Creative',
      address_2: '7 Cromac Ave',
      county: 'Antrim',
      country: 'GB',
      postcode: 'BT7 2JA',
      password: 'SomethingHere65&',
      password_confirmation: 'SomethingHere65&',
      terms_and_conditions: true,
      industries: [1, 2, 3],
      experiences: [
        {
          start_date: '05/12/2016',
          end_date: '19/02/2020',
          role: 'Developer',
          description: 'Some Description',
        },
        {
          start_date: '04/12/2011',
          end_date: '04/12/2016',
          role: 'Front-end',
          description: 'Another Description',
        },
      ],
    };
    //const request = {stateUserSignup};
    userSignup(request).unwrap().then(onPressSuccess).catch(onPressFailure);
    if(isSuccess) {
      setAuthenticated(true);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.text}>
        {'First Name:' + stateUserSignup.first_name}
        </Text>
        <Text style={styles.text}>
        {'Last Name:' + stateUserSignup.last_name}
        </Text>
        <Text style={styles.text}>
        {'DOB:' + stateUserSignup.date_of_birth}
        </Text>
        <Text style={styles.text}>
        {'email:' + stateUserSignup.email}
        </Text>
        <Text style={styles.text}>
        {'address 1:' + stateUserSignup.address_1}
        </Text>
        <Text style={styles.text}>
        {'address 2:' + stateUserSignup.address_2}
        </Text>
        <Text style={styles.text}>
        {'county:' + stateUserSignup.county}
        </Text>
        <Text style={styles.text}>
        {'country:' + stateUserSignup.country}
        </Text>
        <Text style={styles.text}>
        {'postcode:' + stateUserSignup.postcode}
        </Text>
        <Text style={styles.text}>
        {'password:' + stateUserSignup.password}
        </Text>
        <Text style={styles.text}>
        {'password confirm:' + stateUserSignup.password_confirmation}
        </Text>
        <Text style={styles.text}>
        {'Terms and Conditions:' + stateUserSignup.terms_and_conditions}
        </Text>
        <Text style={styles.text}>
        {'Experiences): ' + stateUserSignup.experiences.start_date}
        </Text>
        <Text style={styles.text}>
        {'end date): ' + stateUserSignup.experiences.end_date}
        </Text>
        <Text style={styles.text}>
        {'role): ' + stateUserSignup.experiences.role}
        </Text>
        <Text style={styles.text}>
        {'description): ' + stateUserSignup.experiences.description}
        </Text>
        <Text style={styles.text}>
        {'Industires): ' + stateUserSignup.industries}
        </Text>
        {!isLoading && <CustomButton text="Submit" onPress={onPress} />}
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
