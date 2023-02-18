import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import CustomButton from '../components/CustomButton';
import {Selector, Slice, useAppDispatch, useAppSelector} from '../state';

function WorkExperienceView({navigation, route}) {
  const dispatch = useAppDispatch();
  const stateUserSignup = useAppSelector(Selector.UserSignup);

  const items = [];

  const onPressAdd = () => {
    //console.log(stateUserSignup);
    //dispatch(Slice.userSignup.actions.setNameFirst('test'));
    //dispatch(Slice.userSignup.actions.setExperiences(test));
    navigation.navigate('ExperienceWorkItem');
  };

  const onPressNext = () => {
    navigation.navigate('ExperienceIndustries');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CustomButton onPress={onPressAdd} text={'Add'} />
      {stateUserSignup.experiences.start_date && stateUserSignup.experiences.end_date && stateUserSignup.experiences.role && stateUserSignup.experiences.description === '' ? null : (
        <>
          <Text style={styles.text}>
            {'Experiences): ' + stateUserSignup.experiences.start_date}
          </Text>
          <Text style={styles.text}>
            {'end): ' + stateUserSignup.experiences.end_date}
          </Text>
          <Text style={styles.text}>
            {'role): ' + stateUserSignup.experiences.role}
          </Text>
          <Text style={styles.text}>
            {'desc): ' + stateUserSignup.experiences.description}
          </Text>
        </>
      )}
      <View style={styles.root}>
        {items.map(item => (
          <View style={styles.details}>
            <Text style={styles.text}>
              <Text style={styles.key}>Start Date: </Text>
              <Text>{item.start_date}</Text>
            </Text>

            <Text style={styles.text}>
              <Text style={styles.key}>End Date: </Text>
              <Text>{item.end_date}</Text>
            </Text>

            <Text style={styles.text}>
              <Text style={styles.key}>Role: </Text>
              <Text>{item.role}</Text>
            </Text>

            <Text style={styles.text}>
              <Text style={styles.key}>Role Description: </Text>
              <Text>{item.description}</Text>
            </Text>

            <Icon
              name="trash-2"
              size={30}
              color="#900"
              style={{marginLeft: 'auto'}}
              onPress={() => console.log('Delete')}
            />
          </View>
        ))}
      </View>
      <CustomButton onPress={onPressNext} text={'Next'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'black',
    marginVertical: 10,
  },
  details: {
    marginBottom: 15,
  },
  key: {
    fontWeight: 'bold',
    color: '#3B71F3',
  },
});

export default WorkExperienceView;
