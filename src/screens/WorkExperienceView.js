import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import CustomButton from '../components/CustomButton';
import {Selector, Slice, useAppDispatch, useAppSelector} from '../state';

const WorkExperienceView = ({navigation, route}) => {
  const dispatch = useAppDispatch();
  const stateUserSignup = useAppSelector(Selector.UserSignup);

  const items = [];

  const onPressAdd = () => {
    navigation.navigate('ExperienceWorkItem');
  };

  const onPressNext = () => {
    navigation.navigate('ExperienceIndustries');
  };

  if (
    stateUserSignup.experiences.start_date &&
    stateUserSignup.experiences.end_date &&
    stateUserSignup.experiences.role &&
    stateUserSignup.experiences.description != undefined
  ) {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {'Start Date: ' + stateUserSignup.experiences.start_date}
          </Text>
          <Text style={styles.text}>
            {'End Date : ' + stateUserSignup.experiences.end_date}
          </Text>
          <Text style={styles.text}>
            {'Role : ' + stateUserSignup.experiences.role}
          </Text>
          <Text style={styles.text}>
            {'Description : ' + stateUserSignup.experiences.description}
          </Text>

          {/* {items.map(item => (
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
        ))} */}
          <CustomButton onPress={onPressAdd} text={'Add'} />
          <CustomButton onPress={onPressNext} text={'Next'} />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Experiences</Text>
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
