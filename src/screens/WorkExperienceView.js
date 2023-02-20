import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import CustomButton from '../components/CustomButton';
import {Selector, Slice, useAppDispatch, useAppSelector} from '../state';
import WorkExperienceDisplay from '../components/WorkExperiencesDisplay';

const WorkExperienceView = ({navigation, route}) => {
  const dispatch = useAppDispatch();
  const stateUserSignup = useAppSelector(Selector.UserSignup);

  const onPressAdd = () => {
    navigation.navigate('ExperienceWorkItem');
  };

  const onPressNext = () => {
    navigation.navigate('ExperienceIndustries');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <WorkExperienceDisplay
          experiences={stateUserSignup.experiences}
          deleteEnabled={true}
        />
        <CustomButton onPress={onPressAdd} text={'Add'} />
        <CustomButton onPress={onPressNext} text={'Next'} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'black',
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
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
