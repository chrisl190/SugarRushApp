import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import Toast from 'react-native-toast-message';
import CheckBox from '@react-native-community/checkbox';
import { useAuthenticatedContext } from '../hooks/authenticatedContext';

function validate_password(password) {
  let check = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
  if (password.match(check)) {
    return true;
  } else {
    return false;
  }
}

const SignUpScreenPassword = () => {
  const [authenticated, setAuthenticated] = useAuthenticatedContext();
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [terms_and_conditions, set_terms_and_conditions] = useState(false);


  const navigation = useNavigation();

  const onTermsOfUsePressed = () => {
    console.warn('Terms and Conditions pressed');
  };

  const showPasswordErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Error! Password needs',
      text2: "8 chars, an uppercase, lowercase, number and symbol.",
      position: 'bottom',
    });
  }

  const showPasswordNotMatchingToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Error!',
      text2: 'Please ensure your passwords match.',
      position: 'bottom',
    });
  }

  const successToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'You have registered',
      position: 'bottom',
    });
  }

  const onRegisterPressed = () => {
    navigation.navigate('ExperienceWork');
    if (password === password_confirmation) {
        if (validate_password(password) && validate_password(password_confirmation)){
            setAuthenticated(true);
            successToast();
            navigation.navigate('ExperienceWork');
        } else {
            showPasswordErrorToast();
        }
    } else {
        showPasswordNotMatchingToast();
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create a password</Text>
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          value={password_confirmation}
          setValue={setPasswordConfirmation}
          secureTextEntry
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By registering, you confirm that you accept the{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms and Conditions
          </Text>
        </Text>
        <CheckBox
            style={styles.checkbox}
            disabled={false}
            value={terms_and_conditions}
            onValueChange={newValue => set_terms_and_conditions(newValue)}
          />
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
  link: {
    color: '#FDB075',
  },
});

export default SignUpScreenPassword;
