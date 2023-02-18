import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Toast from 'react-native-toast-message';
import {Selector, Slice, useAppDispatch, useAppSelector} from '../state';

const validate_email = email => {
  let check =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(check)) {
    return true;
  } else {
    return false;
  }
};

const SignUpScreen = ({navigation}) => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');

  const [date_of_birth, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [address_1, setAddress1] = useState('');
  const [address_2, setAddress2] = useState('');
  const [county, setCounty] = useState('');
  const [country, setCountry] = useState('');
  const [postcode, setPostcode] = useState('');

  const dispatch = useAppDispatch();
  const stateUserSignup = useAppSelector(Selector.UserSignup);

  const onRegisterPressed = () => {
    if (!validate_email(email)) {
      return Toast.show({
        type: 'error',
        text1: 'Error!',
        text2: 'Please enter a valid email address.',
        position: 'bottom',
      });
    } else {
      dispatch(Slice.userSignup.actions.setNameFirst(first_name));
      dispatch(Slice.userSignup.actions.setNameLast(last_name));
      dispatch(Slice.userSignup.actions.setDateOfBirth(date_of_birth));
      dispatch(Slice.userSignup.actions.setEmail(email));
      dispatch(Slice.userSignup.actions.setAddress1(address_1));
      dispatch(Slice.userSignup.actions.setAddress2(address_2));
      dispatch(Slice.userSignup.actions.setCounty(county));
      dispatch(Slice.userSignup.actions.setCountry(country));
      dispatch(Slice.userSignup.actions.setPostcode(postcode));
      navigation.navigate('SignUpPassword');
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
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
  container: {
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
});

export default SignUpScreen;
