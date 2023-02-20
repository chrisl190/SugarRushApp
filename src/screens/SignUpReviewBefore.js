import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../components/CustomButton';
import Toast from 'react-native-toast-message';
import {API, Selector, useAppSelector} from '../state';
import {useAuthenticatedContext} from '../hooks/authenticatedContext';

const SignUpReviewBefore = ({navigation}) => {
  const stateUserSignup = useAppSelector(Selector.UserSignup);
  const [userSignup, {data, isLoading, isSuccess}] =
    API.useUserSignupMutation();
  const [authenticated, setAuthenticated] = useAuthenticatedContext();

  const onPressFailure = () => {
    Toast.show({
      type: 'error',
      text1: 'Error!',
      text2: 'Unable to register successfully',
      position: 'bottom',
    });
  };

  const onPressSuccess = response => {
    const userToken = response.data.user_token;
    const message = response.data.message;
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: message,
      position: 'bottom',
    });
    navigation.navigate('SignUpReviewAfter', {key: userToken});
  };

  const onPress = () => {
    const request = {...stateUserSignup};
    userSignup(request).unwrap().then(onPressSuccess).catch(onPressFailure);
    if (isSuccess) {
      setAuthenticated(true);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {'First Name:' + stateUserSignup.first_name}
        </Text>
        <Text style={styles.text}>
          {'Last Name:' + stateUserSignup.last_name}
        </Text>
        <Text style={styles.text}>
          {'DOB:' + stateUserSignup.date_of_birth}
        </Text>
        <Text style={styles.text}>{'email:' + stateUserSignup.email}</Text>
        <Text style={styles.text}>
          {'address 1:' + stateUserSignup.address_1}
        </Text>
        <Text style={styles.text}>
          {'address 2:' + stateUserSignup.address_2}
        </Text>
        <Text style={styles.text}>{'county:' + stateUserSignup.county}</Text>
        <Text style={styles.text}>{'country:' + stateUserSignup.country}</Text>
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
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
});

export default SignUpReviewBefore;
