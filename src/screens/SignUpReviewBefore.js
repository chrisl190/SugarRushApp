import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../components/CustomButton';
import Toast from 'react-native-toast-message';
import {API, Selector, useAppSelector} from '../state';
import {useAuthenticatedContext} from '../hooks/authenticatedContext';

const SignUpReviewBefore = ({navigation}) => {
  const stateUserSignup = useAppSelector(Selector.UserSignup);
  const [userSignup, {isLoading, isSuccess}] = API.useUserSignupMutation();
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
        <Text style={styles.title}>Complete Registration</Text>
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
