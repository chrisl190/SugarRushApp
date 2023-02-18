import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../assets/images/sugar_rush.png';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { useAuthenticatedContext } from '../hooks/authenticatedContext';
import { Selector, Slice, useAppDispatch, useAppSelector } from '../state';

const LandingScreen = () => {
  const [authenticated, setAuthenticated] = useAuthenticatedContext();
  const dispatch = useAppDispatch();
  const stateUserSignup = useAppSelector(Selector.UserSignup);

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignOutPressed = () => {
    dispatch(Slice.userSignup.actions.reset());
    setAuthenticated(false);
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        {authenticated ? (
          <>
            <Text style={styles.title}>Welcome {stateUserSignup.first_name}</Text>
            <CustomButton
              text="Log out"
              onPress={onSignOutPressed}
            />
          </>
        ) : (
          <CustomButton text="Register" onPress={onSignUpPress} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
});

export default LandingScreen;
