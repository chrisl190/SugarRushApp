import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import Toast from 'react-native-toast-message';

function validate_email(email) {
  return true;
  let check =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(check)) {
    return true;
  } else {
    return false;
  }
}

const SignUpScreen = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');

  const [date_of_birth, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [address_1, setAddress1] = useState('');
  const [address_2, setAddress2] = useState('');
  const [county, setCounty] = useState('');
  const [country, setCountry] = useState('');
  const [postcode, setPostcode] = useState('');
  
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    if (!validate_email(email)) {
      return Toast.show({
        type: 'error',
        text1: 'Error!',
        text2: 'Please enter a valid email address.',
        position: 'bottom',
      });
    } else {
      navigation.navigate('SignUpPassword');
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an password</Text>

        <CustomInput
          placeholder="First name"
          value={first_name}
          setValue={setFirstName}
        />
        <CustomInput
          placeholder="Last name"
          value={last_name}
          setValue={setLastName}
        />
        <CustomInput
          placeholder="Date of birth"
          value={date_of_birth}
          setValue={setDob}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Address line 1"
          value={address_1}
          setValue={setAddress1}
        />
        <CustomInput
          placeholder="Address line 2"
          value={address_2}
          setValue={setAddress2}
        />

        <CustomInput placeholder="County" value={county} setValue={setCounty} />
        <CustomInput
          placeholder="Country (ISO code)"
          value={country}
          setValue={setCountry}
          maxLength={2}
        />
        <CustomInput
          placeholder="Postcode"
          value={postcode}
          setValue={setPostcode}
        />

        <CustomButton text="Continue" onPress={onRegisterPressed} />
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

export default SignUpScreen;
