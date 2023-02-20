import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Selector, Slice, useAppDispatch, useAppSelector} from '../state';

const WorkExperienceDisplay = ({experiences, deleteEnabled}) => {
  const dispatch = useAppDispatch();
  const stateUserSignup = useAppSelector(Selector.UserSignup);
  const onPressItem = item => {
    dispatch(Slice.userSignup.actions.removeExperience(item.id));
  };

  return (
    <View>
      {experiences.map(item => (
        <View key={item.id} style={styles.details}>
          <Text style={styles.text}>
            <Text style={styles.key}>Start Date : </Text>
            <Text>{item.start_date}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>End Date : </Text>
            <Text>{item.end_date}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>Role : </Text>
            <Text>{item.role}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>Role Description : </Text>
            <Text>{item.description}</Text>
          </Text>
          {deleteEnabled === true ? (
            <Icon
              name="trash-2"
              size={30}
              color="#900"
              style={{marginLeft: 'auto'}}
              onPress={() => onPressItem(item)}
            />
          ) : null}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default WorkExperienceDisplay;
